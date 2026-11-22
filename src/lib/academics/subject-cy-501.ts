import type { AcademicSubject } from "./types";

export const cy501: AcademicSubject = {
  id: "cy-501",
  code: "CY-501",
  title: "OS Internals for Cyber Security",
  semester: "V Semester",
  program: "RGPV · Cyber Security",
  tagline:
    "Every topic of the syllabus as one connected story: the UNIX kernel from buffer cache to inode, processes and IPC, the security architecture from access control to honeypots, modern hardening from CVEs to secure co-processors, and Windows internals down to Winsock's stream and datagram sockets.",
  description:
    "Five units walk from UNIX kernel architecture (buffer cache, inodes, system calls, pipes, mounting), through processes, signals, scheduling and System V IPC, into OS security - access control, auditing, trusted computing, malware and rootkits with honeypot capture - then CVEs, hardening, virtualization, Android security and secure wallets, ending with Windows internals, worker threads, LPCs and Winsock programming.",
  accentColor: "#3b82f6",
  emoji: "OI",
  unitCount: 5,
  totalSections: 35,
  units: [
    {
      number: 1,
      roman: "I",
      title: "Introduction to the Kernel - UNIX Architecture",
      summary:
        "Unit I builds the kernel floor: UNIX system concepts and architecture, the kernel's data structures, the buffer cache with its headers and pool, block reads and writes, inodes and regular-file structure, directories and the super block, the file system calls, and pipes with mounting.",
      chapter: {
        number: "01",
        title: "Inside the UNIX Kernel",
        intro:
          "Unit I covers UNIX system architecture and concepts, kernel data structures, the buffer cache (buffer header, buffer pool), reading and writing disk blocks, inodes and the structure of regular files, directories and the super block, inode assignment, the file system calls (OPEN, READ, CLOSE, WRITE, CREATE, CHMOD, CHOWN), and pipes with mounting and unmounting.",
        inOneBreath:
          "The kernel sits between system calls and hardware: the buffer cache arbitrates disk blocks via headers on hash/_free lists, inodes describe files with direct and indirect block pointers, the super block tracks mounted file system state, and every operation from OPEN to CHMOD is a syscall entering kernel mode. Pipes are in-memory inodes; mounts layer file systems over mount points.",
        sections: [
          {
            number: "1.1",
            title: "UNIX system concepts and kernel architecture",
            body: [
              "UNIX's architecture is a layered system: hardware at the bottom, the kernel above it (process management, memory management, file system, I/O), and user processes at the top - shell, utilities, applications. The only doorway between user and kernel is the system call interface: a user process traps into kernel mode (mode switch, context saved), the syscall executes with kernel privileges, and results return. Two execution modes, one entry point - the architecture's defining security property, because everything privileged happens behind the syscall gate.",
              "A worked walkthrough of `write(fd, buf, n)` fixes the mechanics: the C library places the syscall number and arguments in registers, executes the trap instruction, the CPU switches to kernel mode, the kernel validates the fd against the process's file table, copies the buffer, and routes to the device driver through the buffer cache (section 1.3); on return, the trap unwinds and the user process continues with the byte count or errno. Every file operation in this unit follows this same gate-and-validate pattern - the pattern is the architecture.",
              "System concepts complete the frame: processes (units of execution with kernel-side bookkeeping), files (unified byte streams - devices are files), and the shell (a user process interpreting commands and forking children). The kernel's data structures - proc table, file table, inode table, buffer pool - are shared kernel state that syscalls manipulate; this unit walks them in order. The exam's conceptual question, 'what happens between write() and the disk?', is answered by tracing exactly this path: syscall -> validation -> buffer cache -> driver -> hardware.",
              "Exam framing: expect 'explain the architecture of the UNIX operating system' and 'the system call mechanism'. Draw the layered diagram, walk one syscall's mode transition, and name the four kernel data structure families. The single-entry-point sentence is the security branch's hook - every later protection concept (Unit III) rests on it.",
            ],
            keyTerms: [
              { term: "Kernel", definition: "The privileged core managing processes, memory, files and I/O behind the syscall gate." },
              { term: "System call", definition: "The controlled entry from user mode into kernel mode - trap, validate, execute, return." },
              { term: "Dual mode", definition: "User mode vs kernel mode execution with hardware-enforced privilege separation." },
              { term: "Kernel data structures", definition: "Proc table, file table, inode table, buffer pool - shared kernel state syscalls manipulate." },
            ],
            table: {
              caption: "The layers of UNIX and who runs where.",
              headers: ["Layer", "Contents", "Privilege"],
              rows: [
                ["User processes", "shells, utilities, applications", "user mode - unprivileged"],
                ["System call interface", "trap gate, argument validation", "the boundary - mode switch"],
                ["Kernel", "process/memory/file/IO subsystems", "kernel mode - full privilege"],
                ["Hardware", "CPU, memory, disks, devices", "physical resources"],
              ],
            },
            bullets: [
              "Layered architecture: hardware -> kernel -> syscall gate -> user processes.",
              "The syscall trap is the single privileged doorway - mode switch plus validation.",
              "write() walkthrough: registers -> trap -> validate fd -> buffer cache -> driver.",
              "Devices are files: the unified byte-stream abstraction.",
              "Kernel data structure families: proc, file, inode tables and the buffer pool.",
              "Everything privileged happens behind the syscall gate - the security property.",
            ],
            diagram: {
              kind: "layers",
              title: "UNIX system architecture",
              caption: "One syscall gate separates every user process from the kernel.",
              layers: [
                { label: "User processes", note: "shells, editors, applications - user mode" },
                { label: "System call interface", note: "trap gate: open, read, write, fork..." },
                { label: "Kernel subsystems", note: "process, memory, file system, I/O - kernel mode" },
                { label: "Hardware", note: "CPU, RAM, disk, devices" },
              ],
            },
            callout: {
              type: "exam",
              title: "One gate, one validation point",
              body: "The security-branch hook for every architecture answer: 'because all privilege lives behind the syscall gate, argument validation at that gate is where OS security begins - a kernel that trusts syscall arguments trusts an attacker'. Quote it, then walk the write() path; the combination reads like a security-aware answer rather than a diagram recital.",
            },
            examQuestions: [
              {
                q: "Explain the architecture of the UNIX operating system with its layers, and describe the system call mechanism by tracing write(fd, buf, n) from user code to hardware.",
                marks: 14,
                outline: [
                  "Layers: hardware -> kernel -> syscall interface -> user processes",
                  "Dual-mode execution: user vs kernel privilege",
                  "Syscall: number+args in registers, trap instruction, mode switch",
                  "Kernel validates fd against the process file table",
                  "Buffer copy routed through the buffer cache to the driver",
                  "Return path: results/errno back to user mode",
                  "Kernel data structures: proc, file, inode tables, buffer pool",
                ],
              },
              {
                q: "Why is the system call interface called the security boundary of the OS?",
                marks: 7,
                outline: [
                  "All privileged operations execute only in kernel mode",
                  "The syscall gate is the sole legal entry",
                  "Argument validation there decides what untrusted callers may do",
                ],
              },
            ],
          },
          {
            number: "1.2",
            title: "Kernel data structures and the buffer cache",
            body: [
              "The buffer cache is the kernel's memory pool for disk blocks - the syllabus's first named structure. Reading a block twice should touch the disk once: the cache keeps copies of recently used blocks in memory, and all file-system I/O flows through it. Its bookkeeping is the buffer header: each buffer carries device number, block number, status flags (locked, valid, delayed write, old), and pointers linking it into two lists - a hash queue (find by device+block) and the free list (recycling order).",
              "A worked getblk walkthrough fixes the algorithm: to read (dev, blk), hash into the queue; if a buffer holds that block, lock it and return it (cache hit); if not, take a buffer from the free list head - if it is marked 'delayed write', first schedule its write-back and take the next; rehash the chosen buffer to the new block's queue, mark it busy, and return it. The two-list structure is the design lesson: hash gives O(1) lookup, free list gives LRU-ish reuse, and the 'delayed write' skip avoids losing data on reuse.",
              "The security branch's angle: the buffer cache is shared state - TOCTOU races (check-then-use between hash and lock) and stale mappings are kernel-level race conditions (Unit II's concurrency principles applied), and buffer-overflow bugs in cache code were historically kernel exploits. State flags (busy, delayed write, old) are exactly the invariants that race-prone code paths violate. The exam's question 'explain the structure of the buffer pool' wants: pool of buffers, buffer headers, hash queues, free list, and the getblk algorithm.",
              "Exam framing: expect 'explain buffer cache, buffer header and the structure of the buffer pool'. Draw the two-list diagram, walk getblk including the delayed-write skip, and name the status flags. The hash-plus-free-list sentence is the marks' spine.",
            ],
            keyTerms: [
              { term: "Buffer cache", definition: "Kernel memory pool caching disk blocks so repeated I/O hits memory, not disk." },
              { term: "Buffer header", definition: "Per-buffer metadata: device, block, status flags, hash and free-list links." },
              { term: "Hash queue", definition: "Lists chaining buffers by device+block for O(1) lookup." },
              { term: "Free list", definition: "Recycling order for unused buffers - approximately least-recently-used." },
              { term: "Delayed write", definition: "Dirty buffer marked for later write-back; skipped and flushed when reused." },
            ],
            table: {
              caption: "Buffer header fields and what each governs.",
              headers: ["Field", "Meaning", "Role in getblk"],
              rows: [
                ["Device + block number", "which disk block is cached", "hash queue membership"],
                ["Status: busy/locked", "in use by a process", "skip or wait during allocation"],
                ["Status: valid", "data matches the disk", "invalid buffers must be re-read"],
                ["Status: delayed write", "dirty - pending write-back", "flush before reuse"],
                ["Links", "hash queue + free list pointers", "lookup and recycling"],
              ],
            },
            bullets: [
              "All file-system I/O flows through the buffer cache - read twice, disk once.",
              "Buffer header: device, block, status flags, two list links.",
              "Hash queues give O(1) lookup by (device, block).",
              "Free list recycles buffers in LRU-ish order.",
              "getblk: hit -> lock and return; miss -> take from free list, flush delayed writes first.",
              "The cache is shared kernel state - races on its invariants are the exploit class.",
            ],
            diagram: {
              kind: "flow",
              title: "The getblk algorithm",
              caption: "Five decisions from a block request to a locked buffer.",
              steps: [
                { label: "Hash (dev, blk)", note: "find the buffer's queue" },
                { label: "Search queue", note: "buffer present? lock and return (hit)" },
                { label: "Miss -> free list", note: "take head buffer" },
                { label: "Delayed write?", note: "schedule write-back; take the next" },
                { label: "Rehash + lock", note: "move to new queue, mark busy, return" },
              ],
            },
            callout: {
              type: "exam",
              title: "Two lists, one algorithm",
              body: "The full-mark buffer-pool answer is structural: 'the pool is a set of buffers, each with a header, chained on a hash queue for lookup and the free list for recycling; getblk walks both - hit means lock-and-return, miss means recycle with delayed writes flushed first'. Draw the two lists, then the getblk steps - the diagram plus algorithm is the grading scheme.",
            },
            examQuestions: [
              {
                q: "Explain the buffer cache: the structure of the buffer pool, buffer header fields, and the getblk algorithm including the delayed-write handling.",
                marks: 14,
                outline: [
                  "Purpose: cache disk blocks - repeated reads hit memory",
                  "Pool: buffers each with a header",
                  "Header: device, block, status flags (busy, valid, delayed write, old)",
                  "Hash queues: O(1) lookup by device+block",
                  "Free list: LRU-ish recycling order",
                  "getblk walkthrough: hit -> lock/return; miss -> take, flush delayed writes, rehash",
                  "Security angle: shared-state races on cache invariants",
                ],
              },
              {
                q: "Why must a 'delayed write' buffer be skipped during allocation?",
                marks: 7,
                outline: [
                  "Its contents are dirty - newer than the disk copy",
                  "Reusing without write-back would lose data",
                  "The algorithm schedules the write and takes the next free buffer",
                ],
              },
            ],
          },
          {
            number: "1.3",
            title: "Reading and writing disk blocks",
            body: [
              "Block I/O is the buffer cache's engine, and the syllabus names its two primitives: bread (block read) and bwrite. bread(dev, blk): call getblk; if the returned buffer is valid, done (cache hit); otherwise schedule the disk read into the buffer and sleep until the driver completes it, then return the locked, valid buffer. The caller releases the buffer (brelse) when done, returning it to the free list.",
              "A worked write path shows the asynchronous half: the file system modifies a buffer obtained via bread, marks it delayed write, and releases it - the disk write happens LATER, when the buffer is reclaimed by getblk or flushed by the sync daemon. The payoff is write coalescing: ten modifications to one block in a second become one disk write. The costs are the crash window: unflushed delayed writes vanish on power loss - the fsck/fsync trade-off every file system makes.",
              "Read-ahead completes the performance picture: sequential file reads request block n+1 while processing n, hiding disk latency behind CPU work; the buffer cache absorbs the prefetch. The security branch's operational note: fsync/fdatasync force delayed writes out (databases and log-structured writes depend on them), and an attacker who can crash a system mid-window exploits exactly the unflushed-state ambiguity - journaling file systems (Unit IV's hardening) exist to close it.",
              "Exam framing: expect 'explain reading and writing disk blocks in UNIX'. Walk bread (getblk -> valid? -> disk read -> sleep -> return), the delayed-write path with its coalescing payoff, and read-ahead. The crash-window sentence is the security hook.",
            ],
            keyTerms: [
              { term: "bread", definition: "Block read: getblk, cache hit or scheduled disk read with sleep, return locked valid buffer." },
              { term: "bwrite / delayed write", definition: "Writes deferred to reclaim time - coalescing at the cost of a crash window." },
              { term: "brelse", definition: "Release a buffer back to the free list after use." },
              { term: "Read-ahead", definition: "Prefetching the next sequential block to hide latency." },
              { term: "fsync", definition: "Force delayed writes to disk - the durability control." },
            ],
            table: {
              caption: "Read path vs write path through the cache.",
              headers: ["Step", "bread (read)", "bwrite path (write)"],
              rows: [
                ["Allocate", "getblk(dev, blk)", "getblk via bread first"],
                ["Data ready?", "valid buffer -> immediate return", "modify in memory"],
                ["Disk touch", "only on cache miss - sleep till done", "deferred: on reclaim or sync"],
                ["Release", "brelse to free list", "mark delayed write, brelse"],
                ["Durability", "n/a", "guaranteed only after fsync/sync"],
              ],
            },
            bullets: [
              "bread: getblk -> valid? return : schedule read, sleep, return.",
              "Writes are marked delayed write and released - the disk sees them later.",
              "Coalescing: many in-memory writes to a block collapse into one disk write.",
              "Crash window: unflushed delayed writes vanish on power loss.",
              "fsync/sync close the window; journaling file systems automate it.",
              "Read-ahead prefetches block n+1 while n is processed.",
            ],
            diagram: {
              kind: "flow",
              title: "The delayed-write lifecycle",
              caption: "From modification to eventual disk write - and the crash window in between.",
              steps: [
                { label: "bread", note: "buffer obtained (hit or disk read)" },
                { label: "Modify in memory", note: "file system updates the buffer" },
                { label: "Mark delayed write", note: "dirty flag set; brelse" },
                { label: "Live in cache", note: "reads served from memory" },
                { label: "Write-back", note: "on reclaim or sync - or lost on crash" },
              ],
            },
            callout: {
              type: "warning",
              title: "The crash window is the security story",
              body: "Delayed writes buy speed with a durability hole: between 'modified in memory' and 'written to disk', a crash loses the data - and leaves file systems in inconsistent states attackers' fuzzers probe. fsync closes the window per-file; journaling closes it system-wide (Unit IV). Connect the cache mechanics to that hole and the answer reads security-aware.",
            },
            examQuestions: [
              {
                q: "Explain reading and writing disk blocks in UNIX: the bread algorithm, delayed writes and their coalescing benefit, read-ahead, and the crash-window consequence with fsync/journaling as remedies.",
                marks: 14,
                outline: [
                  "bread: getblk -> valid? immediate : schedule read + sleep",
                  "brelse returns buffers to the free list",
                  "Writes: modify in memory, mark delayed write, release",
                  "Write-back on reclaim or sync - coalescing many writes into one",
                  "Crash window: unflushed writes lost on power failure",
                  "Remedies: fsync per file, journaling file systems system-wide",
                  "Read-ahead prefetches n+1 during processing of n",
                ],
              },
              {
                q: "Why does the buffer cache make ten writes to one block cheaper than ten disk writes?",
                marks: 7,
                outline: [
                  "All ten modify the same in-memory buffer",
                  "Only the final dirty state reaches the disk",
                  "Write-back happens once, at reclaim or sync",
                ],
              },
            ],
          },
          {
            number: "1.4",
            title: "Inodes and the structure of a regular file",
            body: [
              "The inode is the file's kernel-side identity: a fixed-size record holding type, permissions, owner, timestamps, link count, size, and - the exam's core - the block pointers. UNIX separates names from content: directory entries map names to inode numbers; the inode describes the data. The in-core (memory) inode table holds active inodes with extra fields (reference counts, locks, the reverse pointers), while disk inodes persist them.",
              "A worked size accounting fixes the pointer scheme (System V style, 1 KB blocks): ten direct pointers cover 10 KB; one single-indirect pointer to a block of 1 KB/4-byte pointers covers 256 KB; one double-indirect covers 256 * 256 KB = 64 MB; one triple-indirect extends it further. A 500 KB file thus uses ten direct + one single-indirect block - the exam's favourite arithmetic: given block size and pointer width, compute the max file size per level and total blocks consumed.",
              "The file-structure walkthrough connects to syscalls: open() resolves the name to an inode (directory search, next section) and pins an in-core inode; read() follows the offset to the right pointer level (direct for early blocks, indirect beyond); write() past the current size allocates fresh blocks from the free list and updates the inode's size field. The separation lesson: names live in directories, metadata in inodes, data in blocks - three address spaces, one file.",
              "Exam framing: expect 'explain the inode structure and the structure of a regular file' with the size arithmetic. List inode fields, walk the direct/indirect scheme with the 1 KB example, and connect to open/read. The names-vs-inodes separation sentence is the conceptual spine.",
            ],
            keyTerms: [
              { term: "Inode", definition: "Fixed-size record of file metadata and block pointers - the file's kernel identity." },
              { term: "Direct pointer", definition: "Points at a data block - ten of them in classic UNIX." },
              { term: "Indirect pointer", definition: "Points at a block of pointers - single, double, triple levels." },
              { term: "In-core inode", definition: "Memory copy of an active inode with locks and reference counts." },
              { term: "Link count", definition: "How many directory names reference the inode - zero means free." },
            ],
            table: {
              caption: "File size reachable per pointer level (1 KB blocks, 4-byte pointers).",
              headers: ["Level", "Pointer count", "Reach", "Cumulative"],
              rows: [
                ["Direct", "10", "10 KB", "10 KB"],
                ["Single indirect", "1 (256 pointers)", "256 KB", "266 KB"],
                ["Double indirect", "1 (256x256)", "64 MB", "about 64 MB"],
                ["Triple indirect", "1 (256^3)", "16 GB", "about 16 GB"],
              ],
            },
            bullets: [
              "Inode fields: type, permissions, owner, timestamps, link count, size, pointers.",
              "Names live in directories; content identity lives in inodes.",
              "10 direct pointers; then single/double/triple indirect levels.",
              "Size arithmetic: 1 KB blocks, 4-byte pointers -> 256 pointers per indirect block.",
              "500 KB file = 10 direct + 1 single-indirect (in the worked example).",
              "Writes past current size allocate blocks and update the inode size.",
            ],
            diagram: {
              kind: "layers",
              title: "A regular file's block-pointer scheme",
              caption: "Index 0 at the top: direct first, then the indirect cascade.",
              layers: [
                { label: "10 direct pointers", note: "first 10 KB of data blocks" },
                { label: "Single indirect", note: "pointer block -> 256 KB more" },
                { label: "Double indirect", note: "pointer->pointer->data - 64 MB more" },
                { label: "Triple indirect", note: "three levels deep - gigabytes more" },
              ],
            },
            callout: {
              type: "exam",
              title: "Do the size arithmetic out loud",
              body: "The numerical examiners set: 'with 1 KB blocks and 4-byte pointers, what does each level reach?' Show 1024/4 = 256 pointers, then 10 KB direct, 256 KB single, 64 MB double, and the total. The division is the first mark; the cascade is the rest - practice one full computation by hand.",
            },
            examQuestions: [
              {
                q: "Explain the inode structure and the structure of a regular file: inode fields, the direct/indirect pointer scheme, and a size computation with 1 KB blocks and 4-byte pointers.",
                marks: 14,
                outline: [
                  "Inode: type, permissions, owner, times, link count, size, pointers",
                  "Names in directories vs identity in inodes",
                  "10 direct pointers -> first 10 KB",
                  "Single indirect: 1024/4 = 256 pointers -> 256 KB",
                  "Double indirect: 256 x 256 KB = 64 MB",
                  "Triple indirect: gigabyte reach",
                  "Writes past size allocate blocks and update the inode",
                ],
              },
              {
                q: "How does read() locate the block holding byte offset 300000 in a 1 KB-block file system?",
                marks: 7,
                outline: [
                  "Offset 300000 is beyond the direct + single range start",
                  "Block index = 300000 / 1024 = about 292",
                  "Beyond 10 direct + 256 single -> double-indirect level",
                  "Follow: double-indirect block -> pointer block -> data block",
                ],
              },
            ],
          },
          {
            number: "1.5",
            title: "Directories, the super block and inode assignment",
            body: [
              "Directories are files of (inode-number, name) pairs - the name-to-identity map. The kernel resolves a path by searching directory inodes component by component: '/' -> 'usr' -> 'include' -> 'stdio.h', caching intermediate results (the namei walk). '.' and '..' are ordinary entries pointing at the directory and its parent; hard links add entries sharing one inode (link count up), while symbolic links add entries whose data is a path.",
              "The super block is the file system's own metadata: file system size, free-block count and free-block list, free-inode count and list, the lock fields serializing allocation, and the 'last modification' state that triggers periodic syncing. It is read at mount time (section 1.7) and kept in memory; every allocation consults and updates it. Its integrity is the file system's integrity - which is why super-block corruption is fsck's first stop and why multiple super-block backups exist on disk.",
              "A worked inode assignment shows the allocation protocol: ialloc() takes an inode from the super block's free list; if the list is empty, it scans the cylinder groups for free inodes and refills; the chosen inode is zeroed (owner root, fresh timestamps), then initialized by creat/open with O_CREAT (owner = effective uid, mode = requested & ~umask). ifree returns inodes to the list. The security note: allocation races (two processes grabbing the same inode) are guarded by the super block's lock fields - kernel concurrency again.",
              "Exam framing: expect 'explain directory structure, the super block and inode assignment'. Give the directory-entry model and the namei walk, list super-block fields, and walk ialloc/ifree. The names-vs-inodes plus lock-fields pair is the answer's spine.",
            ],
            keyTerms: [
              { term: "Directory entry", definition: "(inode number, name) pair - the name-to-identity mapping." },
              { term: "Super block", definition: "File-system metadata: sizes, free lists, lock fields - read at mount." },
              { term: "ialloc / ifree", definition: "Inode allocation and release against the super block's free list." },
              { term: "namei", definition: "The kernel's path-resolution walk through directory inodes." },
              { term: "umask", definition: "Permission bits removed from new files' requested modes." },
            ],
            table: {
              caption: "Super block fields and their roles.",
              headers: ["Field", "Content", "Used by"],
              rows: [
                ["File system size", "total blocks/inodes", "mount-time validation"],
                ["Free-block list + count", "recyclable data blocks", "block allocation (alloc)"],
                ["Free-inode list + count", "recyclable inodes", "ialloc/ifree"],
                ["Lock fields", "serialize allocation", "races between processes"],
                ["Dirty flag/timestamps", "sync trigger state", "periodic write-back"],
              ],
            },
            bullets: [
              "Directory = file of (inode number, name) pairs; path resolution walks it.",
              "Hard links share an inode (link count up); symlinks store a path.",
              "Super block: sizes, free lists, lock fields, dirty state - read at mount.",
              "ialloc: take from free list or refill by scanning; zero and initialize.",
              "creat/open applies mode & ~umask - the permission-inheritance rule.",
              "Allocation races are serialized by super-block lock fields.",
            ],
            diagram: {
              kind: "flow",
              title: "Path resolution (the namei walk)",
              caption: "From a pathname string to an in-core inode.",
              steps: [
                { label: "Start at root", note: "'/' inode known at mount" },
                { label: "Search directory", note: "find entry 'usr' -> its inode number" },
                { label: "Read inode + data", note: "the usr directory's entries" },
                { label: "Repeat per component", note: "include -> stdio.h" },
                { label: "Pin in-core inode", note: "open returns an fd onto it" },
              ],
            },
            callout: {
              type: "exam",
              title: "Names are the map, inodes are the territory",
              body: "The conceptual sentence to open directory answers: 'a file's name lives in a directory entry; the file itself lives in an inode - rm removes the name (link count down), not necessarily the data'. Then the super-block fields and ialloc protocol complete the allocation half of the question.",
            },
            examQuestions: [
              {
                q: "Explain directories, the super block and inode assignment: the directory-entry model with path resolution, super-block fields, and the ialloc/ifree protocol with umask handling.",
                marks: 14,
                outline: [
                  "Directory entries: (inode number, name); '.' and '..' included",
                  "namei walk: component-by-component search to the in-core inode",
                  "Hard links vs symbolic links",
                  "Super block: size, free-block list, free-inode list, lock fields",
                  "ialloc: take/refill, zero, initialize owner = uid, mode & ~umask",
                  "ifree returns inodes; alloc/free handle blocks",
                  "Lock fields serialize concurrent allocation",
                ],
              },
              {
                q: "Why do hard links and symbolic links behave differently after the target file is deleted?",
                marks: 7,
                outline: [
                  "Hard link: shares the inode - link count drops, data survives until zero",
                  "Symlink: stores a path - target gone means dangling link",
                ],
              },
            ],
          },
          {
            number: "1.6",
            title: "System calls for files - OPEN, READ, WRITE, CLOSE, CREATE, CHMOD, CHOWN",
            body: [
              "The file syscalls are the syllabus's named set, and they compose into one lifecycle. open(path, flags, mode): resolve the path (namei), allocate the in-core inode, create a file-table entry with the read/write offset, return the lowest free descriptor. create(path, mode) = open with O_CREAT|O_EXCL semantics: inode allocated (ialloc), directory entry added, descriptor returned. The fd is the process's handle - all later calls name the file by it.",
              "A worked read/write cycle: n = read(fd, buf, 4096) advances the file-table offset by n and returns bytes (0 means EOF); write(fd, buf, n) writes at the offset, allocating blocks via the inode's pointer scheme and updating size. close(fd) releases the descriptor and drops the inode's reference - the last close triggers cleanup. lseek repositions the shared offset; dup/dup2 alias descriptors (the shell redirection mechanism's core).",
              "The permission trio completes the set: chmod(path, mode) changes the permission bits (owner-only, or via capabilities); chown(path, uid, gid) changes ownership (restricted to root historically - now CAP_CHOWN); and every open/read/write validates mode against the effective uid/gid at access time - the access check lives inside the syscall, not in the file. The security branch's note: the check-at-syscall pattern is exactly why setuid programs (Unit II) are dangerous - privileges ride along into every file operation.",
              "Exam framing: expect 'explain the file system calls with a lifecycle'. Walk open -> read/write -> close with the file-table and offset mechanics, then create/chmod/chown with the validation point. The 'validation happens inside each syscall' sentence is the security hook.",
            ],
            keyTerms: [
              { term: "open/create", definition: "Resolve or allocate the inode, build the file-table entry, return an fd." },
              { term: "File table offset", definition: "The per-open-file read/write position shared by dup'd descriptors." },
              { term: "read/write", definition: "Transfer bytes at the offset; write allocates blocks and updates size." },
              { term: "chmod/chown", definition: "Change mode bits / ownership - restricted operations." },
              { term: "Access check at syscall", definition: "Mode validated against effective uid/gid inside each file syscall." },
            ],
            table: {
              caption: "The file syscall set and its kernel effects.",
              headers: ["Syscall", "Kernel effect", "Security note"],
              rows: [
                ["open(path, flags, mode)", "namei + in-core inode + file entry -> fd", "mode checked against uid/gid"],
                ["create(path, mode)", "ialloc + directory entry + fd", "mode & ~umask applied"],
                ["read(fd, buf, n)", "copy n bytes at offset; advance", "permission re-checked"],
                ["write(fd, buf, n)", "copy out; allocate blocks; update size", "same check"],
                ["close(fd)", "release descriptor + inode reference", "last close triggers cleanup"],
                ["chmod / chown", "rewrite mode / owner fields", "owner or CAP_CHOWN only"],
              ],
            },
            bullets: [
              "open: namei -> in-core inode -> file-table entry -> lowest fd.",
              "create: ialloc + directory entry + the same fd plumbing.",
              "read/write operate at the file-table offset; EOF is read returning 0.",
              "close releases the descriptor; the last close frees the inode reference.",
              "chmod/chown rewrite the inode's permission/owner fields.",
              "Every access re-validates mode vs effective uid inside the syscall.",
            ],
            diagram: {
              kind: "flow",
              title: "open() to close(), the descriptor lifecycle",
              caption: "One file, one fd, three kernel structures touched.",
              steps: [
                { label: "open(path)", note: "namei resolves to an inode" },
                { label: "File-table entry", note: "offset, flags, inode pointer" },
                { label: "fd returned", note: "process descriptor index" },
                { label: "read/write", note: "offset advances; blocks allocated" },
                { label: "close(fd)", note: "descriptor and reference released" },
              ],
            },
            callout: {
              type: "tip",
              title: "The check lives in the syscall",
              body: "The security sentence that connects this section to Unit II: 'permissions are validated inside each file syscall against the effective uid - so a setuid program's file operations run with the setuid identity, which is why setuid is both a feature and an attack surface'. Chain it to chmod/chown's restriction rules for the complete syscall answer.",
            },
            examQuestions: [
              {
                q: "Explain the UNIX file system calls (open, create, read, write, close, chmod, chown) with their kernel effects, and trace one full open-read-write-close lifecycle.",
                marks: 14,
                outline: [
                  "open: namei, in-core inode, file-table entry, fd",
                  "create: ialloc + directory entry + same plumbing",
                  "read: copy at offset, advance, 0 = EOF",
                  "write: allocate blocks via inode pointers, update size",
                  "close: release fd and inode reference",
                  "chmod/chown: rewrite mode/owner fields - restricted",
                  "Access validation inside each syscall vs effective uid",
                ],
              },
              {
                q: "How does shell redirection (cmd > file) use these syscalls?",
                marks: 7,
                outline: [
                  "Shell opens file -> fd 1 (dup2 onto stdout)",
                  "Child inherits the descriptor table across fork/exec",
                  "cmd's write(1, ...) lands in the file",
                ],
              },
            ],
          },
          {
            number: "1.7",
            title: "Pipes, mounting and unmounting",
            body: [
              "A pipe is an in-memory FIFO between related processes: the kernel allocates an inode of type pipe with two descriptors (read end, write end); writes block when full, reads block when empty - a byte-stream channel with the kernel buffering between. pipe(fds) creates it; the shell's `cmd1 | cmd2` creates the pipe, forks twice, and dup2s the ends onto the children's stdout/stdin - the composition mechanism of the entire UNIX tool philosophy.",
              "A worked pipe walkthrough: pipe(fd) returns fd[0] (read), fd[1] (write); fork inherits both; the child writing closes its read end, the parent reading closes its write end - the close discipline matters, because a reader blocks forever (or gets EOF incorrectly) while a stray write-end descriptor remains open in any process. EOF is signalled only when ALL write ends close - the exam's favourite pipe subtlety, and the same discipline Unit IV's message-passing follows.",
              "Mounting layers file systems onto the tree: mount(spec, dir, flags) reads the new file system's super block into memory, records (mounted fs, covered directory) in the mount table, and redirects namei - crossing 'dir' now enters the new file system's root. unmount (umount) checks no in-core inodes or open files remain on it, flushes via the sync discipline, and removes the table entry. The mount table is namei's detour map - path resolution checks for covered directories at every step.",
              "Exam framing: expect 'explain pipes' and 'mounting and unmounting'. Walk pipe+fork+dup2 with the close discipline and EOF rule, then mount/unmount with the mount-table mechanics. The 'EOF only when all write ends close' sentence is the pipe mark; the namei detour is the mount mark.",
            ],
            keyTerms: [
              { term: "Pipe", definition: "In-memory FIFO inode with read/write ends - unidirectional byte stream." },
              { term: "EOF discipline", definition: "Readers see EOF only after every write-end descriptor closes." },
              { term: "mount table", definition: "Kernel list of (mounted file system, covered directory) pairs." },
              { term: "namei detour", definition: "Path resolution redirects at covered directories into the mounted root." },
              { term: "umount checks", definition: "No active inodes or open files may remain before unmounting." },
            ],
            table: {
              caption: "Pipe mechanics and the classic mistakes.",
              headers: ["Rule", "Content", "Broken by"],
              rows: [
                ["Blocking", "write blocks when full; read blocks when empty", "busy-wait instead of select"],
                ["EOF", "only when all write ends close", "unclosed fd in a grandchild"],
                ["Unidirection", "one direction per pipe", "expecting full duplex"],
                ["Relatedness", "created before fork - inherited", "pipe after fork (no sharing)"],
                ["Atomicity", "writes under PIPE_BUF are atomic", "interleaved multi-writer chunks"],
              ],
            },
            bullets: [
              "Pipe = kernel-buffered FIFO inode; fds[0] read, fds[1] write.",
              "Shell composition: pipe + two forks + dup2 onto stdin/stdout.",
              "Close the unused ends - stray write ends suppress EOF forever.",
              "EOF when all write ends close - the favourite exam subtlety.",
              "mount: super block in memory, mount-table entry, namei detours.",
              "umount: no open files or in-core inodes, then flush and unlist.",
            ],
            diagram: {
              kind: "flow",
              title: "`cmd1 | cmd2` in syscall terms",
              caption: "Pipe, fork, dup2, exec - the composition machine.",
              steps: [
                { label: "pipe(fd)", note: "kernel FIFO created" },
                { label: "fork x2", note: "two children inherit both ends" },
                { label: "Child 1", note: "dup2(fd[1], stdout); exec cmd1" },
                { label: "Child 2", note: "dup2(fd[0], stdin); exec cmd2" },
                { label: "Parent", note: "closes both ends; waits" },
              ],
            },
            callout: {
              type: "warning",
              title: "Stray write ends suppress EOF",
              body: "The bug that costs debugging hours and exam marks: if any process - often a forgotten grandchild - still holds a write-end descriptor, readers never see EOF and block forever. The discipline is unconditional: close every unused pipe end immediately after fork. State the rule and the EOF-when-all-closed consequence together.",
            },
            examQuestions: [
              {
                q: "Explain pipes: creation, the fork/dup2 composition used by the shell, blocking and EOF semantics, and the close discipline. Then explain mounting and unmounting with the mount table's role in path resolution.",
                marks: 14,
                outline: [
                  "pipe(fd): read end 0, write end 1; kernel-buffered FIFO",
                  "Shell: pipe -> fork x2 -> dup2 -> exec",
                  "Write blocks when full; read blocks when empty",
                  "EOF only when all write ends close - the close discipline",
                  "mount: super block read, mount-table entry, namei detour",
                  "umount: no active inodes/files, flush, unlist",
                  "Mount table is path resolution's detour map",
                ],
              },
              {
                q: "Why does a reader on a pipe block forever even though the writer exited?",
                marks: 7,
                outline: [
                  "Some other process still holds a write-end descriptor",
                  "EOF fires only when every write end closes",
                  "Find and close the stray descriptor",
                ],
              },
            ],
          },
        ],
      },
    },
    {
      number: 2,
      roman: "II",
      title: "Processes, Signals, Scheduling and IPC",
      summary:
        "Unit II moves to execution: process memory layout and description, process control and creation, signals, scheduling, privileges with the threat and malware landscape, kernel concurrency principles, and the IPC toolkit - process tracing, System V IPC, shared memory and semaphores.",
      chapter: {
        number: "02",
        title: "Processes and Their Conversations",
        intro:
          "Unit II covers system memory layout, process description and control, process creation, signals, scheduling, privileges, threats, intruders and malicious software, time and clock handling, principles of concurrency, and inter-process communication - process tracing, System V IPC, shared memory and semaphores.",
        inOneBreath:
          "A process is text/data/heap/stack regions plus kernel bookkeeping (proc table, u-area); fork copies, exec replaces, wait reaps. Signals are asynchronous kernel-to-process notifications; scheduling is multilevel feedback with priorities; privileges ride uid/gid - setuid is the attack surface. IPC spans ptrace tracing, System V shared memory and semaphores.",
        sections: [
          {
            number: "2.1",
            title: "Process memory layout and description",
            body: [
              "Every process owns a virtual address space laid out in regions: text (code, read-only, shared), initialized data, BSS (uninitialized data), heap (grows upward via brk/malloc), and stack (grows downward, frames per call). The kernel tracks these regions per process, with page tables mapping them to physical frames - the layout the syllabus names 'layout system memory'. Address-space isolation is the security foundation: one process's pointer cannot name another's memory without going through IPC.",
              "A worked layout map for a running C program: text at low addresses (shared across execs of the same binary - copy-on-reference), data/BSS next, heap above (malloc arena), then a gap, stack at the top growing down; above the stack, kernel space (unmapped for user mode). Buffer-overflow attacks (Unit III's malware enabling) target exactly the stack/heap regions - the layout is the attack map. Modern mitigations (ASLR) randomize the map's base addresses per process.",
              "Process description is the kernel's bookkeeping: the proc table entry (always in kernel memory: PID, state, priority, scheduling data, pointers) and the u-area (swappable per-process context: file table pointers, signal dispositions, credentials, accounting) - the fork/exec machinery manipulates both. The two-structure split is the syllabus's named design: what the scheduler must always see lives in proc; what only the running process needs lives in the u-area.",
              "Exam framing: expect 'explain the process memory layout' and 'process description: proc table and u-area'. Draw the region map with growth directions, list proc vs u-area contents, and connect the layout to overflow attacks and ASLR. The isolation sentence is the security spine.",
            ],
            keyTerms: [
              { term: "Regions", definition: "text, data, BSS, heap, stack - the virtual address space segments." },
              { term: "Proc table entry", definition: "Always-resident kernel record: PID, state, priority, scheduling data." },
              { term: "U-area", definition: "Swappable per-process context: files, signals, credentials, accounting." },
              { term: "Address-space isolation", definition: "One process cannot name another's memory - the OS security foundation." },
              { term: "ASLR", definition: "Randomized region base addresses defeating hardcoded exploit offsets." },
            ],
            table: {
              caption: "The process address space, low to high.",
              headers: ["Region", "Content", "Growth/property"],
              rows: [
                ["Text", "machine code", "read-only, shared per binary"],
                ["Data + BSS", "initialized + uninitialized globals", "fixed at exec"],
                ["Heap", "malloc allocations", "grows up (brk)"],
                ["Stack", "call frames, locals", "grows down per call"],
                ["Kernel space", "unmapped for user mode", "reachable only via syscalls"],
              ],
            },
            bullets: [
              "Regions: text (shared, read-only), data/BSS, heap (up), stack (down).",
              "Kernel space sits above user mappings - syscall-only access.",
              "Proc table: always-resident scheduling data; u-area: swappable context.",
              "Overflows target stack/heap regions - the layout is the attack map.",
              "ASLR randomizes bases per process - the layout mitigation.",
              "Isolation is the foundation; IPC is the only legal bridge.",
            ],
            diagram: {
              kind: "layers",
              title: "Process address space (index 0 = low address)",
              caption: "Text to stack, with the heap and stack growing toward each other.",
              layers: [
                { label: "Text", note: "code - read-only, shared" },
                { label: "Data + BSS", note: "globals - fixed at exec" },
                { label: "Heap", note: "malloc - grows upward" },
                { label: "Stack", note: "frames - grows downward" },
                { label: "Kernel space", note: "unmapped; syscalls only" },
              ],
            },
            callout: {
              type: "exam",
              title: "The layout is the attack map",
              body: "The security branch's reading of this section: buffer overflows are layout attacks - they overwrite the stack's return addresses or corrupt heap metadata, and ASLR defeats them by randomizing the map. Draw the region stack with growth arrows, then name ASLR - that pairing converts a memory-layout answer into a security answer.",
            },
            examQuestions: [
              {
                q: "Explain the process memory layout (regions and growth) and the kernel's process description: proc table entry versus u-area contents.",
                marks: 14,
                outline: [
                  "Text: read-only, shared across processes of the same binary",
                  "Data/BSS: initialized and uninitialized globals",
                  "Heap grows upward (brk); stack grows downward (frames)",
                  "Kernel space above - syscall-only access",
                  "Proc entry: PID, state, priority - always resident",
                  "U-area: file pointers, signal dispositions, credentials - swappable",
                  "Security: isolation is the foundation; ASLR randomizes the map",
                ],
              },
              {
                q: "Why is the text region marked read-only and shared?",
                marks: 7,
                outline: [
                  "Code never changes during execution - writability is pure risk",
                  "Sharing saves physical memory across identical binaries",
                  "Write attempts fault - protection enforced by page tables",
                ],
              },
            ],
          },
          {
            number: "2.2",
            title: "Process control and creation - fork, exec, wait",
            body: [
              "Process control is the syscall quartet: fork() duplicates the calling process (copy-on-write address space, child returns 0, parent gets the child's PID); exec() replaces the address space with a new program (same PID, new text/data/stack, argument/environment arrays passed); wait()/waitpid() reaps terminated children and collects status; exit() terminates and notifies the parent via SIGCHLD. The UNIX shell's every command is this quartet in sequence.",
              "A worked shell-execution walkthrough: the shell forks; the child closes unused descriptors, dup2s redirections, and execs the command (arguments from the command line, environment inherited); the parent wait()s (or proceeds for background jobs), reading the exit status. Copy-on-write makes fork cheap: pages are shared read-only and copied only on first write - fork's cost tracks actual divergence, not address-space size.",
              "Zombies and orphans are the lifecycle's edge cases: a terminated child whose parent has not waited remains a zombie (proc entry retained for status); a child whose parent died is reparented to init (PID 1), which waits on it - the reaping discipline. The security branch's angle: fork+exec is also the privilege-dropping mechanism - a root service forks, drops to a dedicated uid, then execs the worker; and PID reuse/descriptor inheritance across fork are classic bug sources (stray pipe ends, leaked credentials).",
              "Exam framing: expect 'explain process creation: fork, exec, wait' with the shell walkthrough, copy-on-write, and zombie/orphan handling. The quartet plus COW plus reaping is the answer's full shape.",
            ],
            keyTerms: [
              { term: "fork", definition: "Duplicate the process - child gets 0, parent the child PID; copy-on-write pages." },
              { term: "exec", definition: "Replace the address space with a new program; PID unchanged." },
              { term: "wait/waitpid", definition: "Reap terminated children and collect exit status." },
              { term: "Copy-on-write", definition: "Pages shared read-only after fork; copied on first write." },
              { term: "Zombie / orphan", definition: "Unwaited dead child; reparented child of a dead parent." },
            ],
            codeExample: {
              language: "c",
              caption: "shell_step.c - the quartet in sequence",
              code: `#include <unistd.h>
#include <sys/wait.h>
#include <stdio.h>

int main(void) {
    pid_t pid = fork();                 /* duplicate */
    if (pid == 0) {                     /* child */
        execlp("ls", "ls", "-l", (char *)0);   /* replace */
        _exit(127);                     /* exec failed */
    }
    /* parent */
    int status;
    waitpid(pid, &status, 0);           /* reap */
    if (WIFEXITED(status))
        printf("child exited %d\\n", WEXITSTATUS(status));
    return 0;
}`,
            },
            bullets: [
              "fork: duplicate with COW; child returns 0, parent the PID.",
              "exec: new program, same PID; args/env arrays passed in.",
              "wait/waitpid reaps children and reads exit status.",
              "exit notifies the parent via SIGCHLD.",
              "Zombies: unwaited dead children; orphans reparent to init.",
              "fork+exec is also the privilege-drop pattern for services.",
            ],
            diagram: {
              kind: "flow",
              title: "One shell command, in syscalls",
              caption: "fork, redirect, exec, wait - the UNIX pattern of everything.",
              steps: [
                { label: "fork()", note: "shell duplicates itself" },
                { label: "Child setup", note: "close/dup2 redirections" },
                { label: "exec(cmd)", note: "address space replaced" },
                { label: "Parent wait()", note: "status collected; prompt returns" },
                { label: "Child exit()", note: "SIGCHLD; zombie until reaped" },
              ],
            },
            callout: {
              type: "tip",
              title: "COW makes fork cheap",
              body: "The design sentence examiners check: 'fork copies nothing eagerly - pages are shared read-only and duplicated only on first write (copy-on-write), so fork's cost tracks divergence, not address-space size'. Then exec replaces the space wholesale. COW + exec is why UNIX process creation is both cheap and safe.",
            },
            examQuestions: [
              {
                q: "Explain process creation and control in UNIX: fork, exec, wait with the shell-execution walkthrough, copy-on-write, and zombie/orphan handling.",
                marks: 14,
                outline: [
                  "fork duplicates: child 0, parent PID; COW pages",
                  "exec replaces the address space; PID preserved",
                  "Child redirects (dup2) then execs; arguments/environment passed",
                  "Parent waits; WIFEXITED/WEXITSTATUS read status",
                  "exit raises SIGCHLD; unwaited child = zombie",
                  "Orphans reparent to init which reaps them",
                  "Privilege-drop pattern: fork, drop uid, exec",
                ],
              },
              {
                q: "What exactly does copy-on-write copy, and when?",
                marks: 7,
                outline: [
                  "Nothing at fork time - page tables shared read-only",
                  "On first write to a page: fault, copy, map privately",
                  "Cost tracks actual divergence, not space size",
                ],
              },
            ],
          },
          {
            number: "2.3",
            title: "Signals",
            body: [
              "Signals are the kernel's asynchronous notifications to processes - software interrupts carrying a number, not a payload: SIGKILL (unblockable termination), SIGSEGV (invalid memory), SIGINT (Ctrl-C), SIGCHLD (child state change), SIGTERM (polite kill), SIGUSR1/2 (application-defined). The delivery machinery: the kernel marks a pending signal in the process's signal bitmap; at return-to-user-mode, pending unblocked signals are delivered - handlers run on the target process's own stack (or an alternate one via sigaltstack).",
              "A worked handler sketch fixes the API: signal(SIGINT, handler) or the portable sigaction(SIGINT, &act, NULL) with struct sigaction specifying sa_handler/sa_mask/sa_flags; the handler defers work (set a flag, write to a self-pipe) rather than doing it inline - the reentrancy discipline, since the handler interrupted arbitrary code. Blocking is via sigprocmask/sigaction's sa_mask; sigpending reports pending-blocked signals. The self-pipe trick converts a signal into a readable byte - unifying signals with the select loop of event-driven servers.",
              "The reliability rules are the section's exam payload: SIGKILL/SIGSTOP cannot be caught or blocked (the kernel's reservation of final control); handlers must be async-signal-safe (no malloc, no stdio); disposition is per-process and inherited across fork, reset to default across exec (the exec-reset rule - why daemons re-install handlers after exec). The security angle: signal races (handler vs main flow on shared data) are TOCTOU-class bugs, and SIGKILL-immunity is precisely what makes malware termination hard without kernel support.",
              "Exam framing: expect 'explain signals with handler installation' and 'the delivery mechanism'. Walk pending -> return-to-user -> handler; give the sigaction sketch; state the blockable/unblockable split and the exec-reset rule. The self-pipe trick is the practical differentiator.",
            ],
            keyTerms: [
              { term: "Signal", definition: "Asynchronous kernel-to-process notification - a number, no payload." },
              { term: "sigaction", definition: "Portable handler installation: handler, mask, flags." },
              { term: "Pending vs delivered", definition: "Marked in the bitmap at generation; run at return to user mode." },
              { term: "SIGKILL/SIGSTOP", definition: "Unblockable, uncatchable - the kernel's reserved control." },
              { term: "Self-pipe trick", definition: "Handler writes a byte to a pipe, unifying signals with select loops." },
            ],
            table: {
              caption: "Common signals and their character.",
              headers: ["Signal", "Trigger", "Default action"],
              rows: [
                ["SIGKILL", "explicit kill -9", "terminate (unblockable)"],
                ["SIGSEGV", "invalid memory access", "terminate + core"],
                ["SIGINT", "Ctrl-C at the terminal", "terminate"],
                ["SIGTERM", "polite kill default", "terminate (catchable)"],
                ["SIGCHLD", "child stopped/terminated", "ignore - handler reaps"],
                ["SIGUSR1/2", "application-defined", "terminate"],
              ],
            },
            bullets: [
              "Signals: numbered async notifications; kernel marks pending.",
              "Delivered at return-to-user-mode; handlers run in-process.",
              "sigaction: handler + blocked mask + flags (SA_RESTART).",
              "SIGKILL/SIGSTOP uncatchable - the kernel's final control.",
              "Handlers must be async-signal-safe; defer via self-pipe.",
              "Dispositions inherited across fork, reset to default across exec.",
            ],
            diagram: {
              kind: "flow",
              title: "Signal delivery, end to end",
              caption: "From generation to handler return - all inside the target process's context.",
              steps: [
                { label: "Generate", note: "kernel or kill() marks the signal pending" },
                { label: "Pending check", note: "blocked? stays pending" },
                { label: "Return-to-user gate", note: "delivery point at mode transition" },
                { label: "Handler runs", note: "on the process's stack - async-safe work only" },
                { label: "Resume", note: "interrupted flow continues (EINTR or SA_RESTART)" },
              ],
            },
            callout: {
              type: "exam",
              title: "The exec-reset rule",
              body: "The lifecycle detail examiners test: signal dispositions survive fork (the child inherits handlers) but reset to default across exec (the new program did not consent to the old handlers). Any answer about daemons, shells or privilege-dropping should state it - it explains why the post-exec program re-installs its own handlers.",
            },
            examQuestions: [
              {
                q: "Explain signals: the delivery mechanism (pending, return-to-user, handler), handler installation with sigaction, blocking, and the SIGKILL/SIGSTOP reservation. Include the self-pipe trick.",
                marks: 14,
                outline: [
                  "Signal = numbered async notification from kernel or kill()",
                  "Pending bitmap; delivered at return-to-user-mode gate",
                  "sigaction: handler, sa_mask, SA_RESTART flag",
                  "sigprocmask blocks; sigpending reports held signals",
                  "SIGKILL/SIGSTOP uncatchable - kernel's reserved control",
                  "Handlers async-signal-safe; defer work via self-pipe",
                  "Fork inherits dispositions; exec resets to default",
                ],
              },
              {
                q: "Why must signal handlers avoid malloc and stdio?",
                marks: 7,
                outline: [
                  "The handler interrupted arbitrary code, possibly inside malloc",
                  "Re-entering non-reentrant routines corrupts their state",
                  "Only async-signal-safe actions are legal - set flags, write bytes",
                ],
              },
            ],
          },
          {
            number: "2.4",
            title: "Process scheduling",
            body: [
              "Scheduling decides which runnable process owns the CPU. UNIX's classic scheme is multilevel feedback round-robin: every runnable process has a priority derived from its recent CPU usage - the decay formula priority = base + cpu_usage/2, with usage halved each clock tick - so CPU hogs sink in priority and interactive processes rise; equal-priority processes rotate via time-slice preemption at the clock interrupt.",
              "A worked decay trace fixes the arithmetic: a process burns a full slice each tick, its usage accumulates, priority rises numerically (worse); one tick of sleep halves usage repeatedly (usage = usage/2 per tick), so an idle process climbs back toward its nice base. nice values shift the base: nice +10 means a numerically higher (lower-priority) base - the voluntary yield. The scheduler's clock-tick routine: recompute priorities, reschedule if a higher-priority process became runnable, else continue the slice.",
              "The modern picture completes the syllabus's framing: Linux's CFS replaced fixed slices with virtual-runtime fairness (red-black tree, leftmost runs next), and real-time classes (SCHED_FIFO/RR) preempt everything normal - but the feedback principle (past behaviour shapes future priority) is the syllabus's named mechanism. The security angle: priority manipulation and CPU exhaustion are denial-of-service vectors at the scheduler layer (Unit III's DoS family seen from inside), and real-time scheduling privileges are capability-gated.",
              "Exam framing: expect 'explain UNIX process scheduling' with the decay formula and a worked trace, the round-robin slice, and nice. The feedback sentence - 'past CPU use lowers future priority' - is the mechanism's spine.",
            ],
            keyTerms: [
              { term: "Multilevel feedback", definition: "Priorities adjusted by recent behaviour - CPU hogs sink, interactives rise." },
              { term: "Decay usage", definition: "usage halved per tick; priority = base + usage/2 - the classic formula." },
              { term: "Round-robin slice", definition: "Equal-priority processes rotate on clock-tick preemption." },
              { term: "nice", definition: "Base-priority offset - higher nice, lower priority." },
              { term: "SCHED_FIFO/RR", definition: "Real-time classes preempting all normal scheduling." },
            ],
            table: {
              caption: "One decay trace - hog vs sleeper.",
              headers: ["Tick", "Hog usage/priority", "Sleeper usage/priority"],
              rows: [
                ["t0", "0 / base", "0 / base"],
                ["t1 (hog runs)", "60 / base+30", "0 / base"],
                ["t4 (hog ran 4x)", "high / worst", "slept: usage halved twice"],
                ["t5 (sleeper wakes)", "still low priority", "rises - preempts the hog"],
              ],
            },
            bullets: [
              "Feedback: recent CPU use raises usage, worsening priority.",
              "Decay: usage halved each tick - sleepers climb back.",
              "Round-robin: equal priorities rotate on the clock slice.",
              "nice shifts the base priority voluntarily.",
              "Modern: CFS virtual-runtime fairness; RT classes preempt normal.",
              "Security angle: CPU exhaustion and priority manipulation are DoS vectors.",
            ],
            diagram: {
              kind: "cycle",
              title: "The scheduler's clock-tick loop",
              caption: "Account, decay, preempt, dispatch - every tick.",
              steps: [
                { label: "Tick interrupt", note: "clock fires; running process accounted" },
                { label: "Decay + recompute", note: "usage/2 for sleepers; priority refreshed" },
                { label: "Slice expired?", note: "round-robin rotation among equals" },
                { label: "Better candidate?", note: "higher priority runnable -> preempt" },
                { label: "Dispatch", note: "context switch into the chosen process" },
              ],
            },
            callout: {
              type: "exam",
              title: "Feedback is the mechanism",
              body: "Write the formula and one trace: 'priority = base + cpu_usage/2, usage halved per tick - so a CPU hog sinks while an interactive sleeper recovers'. Then the round-robin slice for equals. Examiners grade the decay arithmetic; a bare 'round robin' answer loses the feedback half of the marks.",
            },
            examQuestions: [
              {
                q: "Explain UNIX process scheduling: the multilevel feedback design, the decay-usage priority formula with a worked trace, round-robin preemption, and nice values.",
                marks: 14,
                outline: [
                  "Feedback design: recent behaviour shapes priority",
                  "priority = base + usage/2; usage halved per tick",
                  "Worked trace: hog accumulates and sinks; sleeper decays and rises",
                  "Equal priorities rotate by clock-tick slice",
                  "nice shifts the base - voluntary deprioritization",
                  "Modern note: CFS fairness, SCHED_FIFO/RR real-time classes",
                  "Security: CPU exhaustion as scheduler-level DoS",
                ],
              },
              {
                q: "Why do interactive processes stay responsive under the feedback scheduler?",
                marks: 7,
                outline: [
                  "They sleep between keystrokes - usage decays",
                  "Low usage -> high priority on wake",
                  "They preempt the CPU hog at the next tick",
                ],
              },
            ],
          },
          {
            number: "2.5",
            title: "Privileges, threats, intruders and malicious software",
            body: [
              "Privilege in UNIX is credential-based: every process carries real and effective uid/gid (effective decides permissions; real identifies the user), plus supplementary groups. setuid/setgid executables run with the file owner's identity - the mechanism that lets password programs read /etc/shadow and the attack surface that makes 'one vulnerable setuid root binary' a system-wide event. Capability splitting (CAP_CHOWN, CAP_NET_ADMIN) and privilege-dropping (fork, setuid, exec) are the modern containment answers.",
              "A worked setuid walkthrough: /usr/bin/passwd is owned root with setuid bit; a user execs it - effective uid becomes root for the process, so its shadow-file writes succeed; after the write it drops privileges. The abuse pattern: a setuid binary with a buffer overflow (Unit III) executes attacker code WITH root identity - the classic local root escalation; mitigations: minimize setuid surface, drop early, use capabilities, and noexec/nosuid mounts on world-writable paths.",
              "The threat taxonomy completes the syllabus's list: intruders (masquerader, misfeasor, clandestine user - Anderson's classic classification), threats (unauthorized access, data tampering, denial of service), and malicious software - viruses, worms, trojans, and their kernel-flavoured descendants (rootkits, ransomware: Unit III's detailed treatment). The clock/time item in the syllabus rides here: system time underpins logs and audit trails - an attacker who can skew the clock corrupts the forensic timeline, hence NTP authentication and monotonic clocks.",
              "Exam framing: expect 'explain privileges and setuid with the threat taxonomy'. Give real-vs-effective uid, the passwd walkthrough, the escalation pattern, and Anderson's intruder classes. The setuid-is-both-feature-and-surface sentence is the security spine.",
            ],
            keyTerms: [
              { term: "Real vs effective uid", definition: "Identity vs permission - effective uid decides file access." },
              { term: "setuid bit", definition: "Executable runs with the file owner's identity - privilege mechanism and attack surface." },
              { term: "Privilege drop", definition: "Fork, setuid to least privilege, exec the worker." },
              { term: "Anderson classes", definition: "Masquerader, misfeasor, clandestine user - the intruder taxonomy." },
              { term: "Clock integrity", definition: "Trusted time underpins logs/audit - NTP auth and monotonic clocks protect the timeline." },
            ],
            table: {
              caption: "The threat and intruder taxonomy.",
              headers: ["Category", "Who/what", "Example"],
              rows: [
                ["Masquerader", "outsider with stolen credentials", "cracked account, phishing login"],
                ["Misfeasor", "legitimate user abusing privilege", "insider exfiltrating data"],
                ["Clandestine user", "seizes supervisory control", "rootkit hiding sessions"],
                ["Malware", "autonomous malicious code", "virus, worm, trojan, rootkit"],
                ["DoS threat", "availability attack", "CPU exhaustion, fork bombs"],
              ],
            },
            bullets: [
              "Credentials: real/effective uid/gid + supplementary groups.",
              "Effective uid decides permissions; setuid binaries borrow the owner's.",
              "passwd walkthrough: setuid root -> shadow write -> drop.",
              "Escalation: vulnerable setuid binary = local root via overflow.",
              "Mitigations: minimal setuid, early drop, capabilities, nosuid mounts.",
              "Anderson's intruders: masquerader, misfeasor, clandestine user.",
            ],
            diagram: {
              kind: "flow",
              title: "The setuid lifecycle and its danger window",
              caption: "Privilege is borrowed for a reason - the window is the risk.",
              steps: [
                { label: "User execs", note: "setuid binary, owned root" },
                { label: "Effective uid = root", note: "privilege borrowed" },
                { label: "Task performed", note: "shadow file update" },
                { label: "Privilege dropped", note: "setuid back to user" },
                { label: "Danger window", note: "any bug while root = system compromise" },
              ],
            },
            callout: {
              type: "warning",
              title: "Every setuid binary is a root-shaped hole",
              body: "The security sentence for this section: 'setuid is privilege delegation without an auditor - any flaw in the binary executes with its owner's identity, so the setuid inventory is the local-escalation map'. Chain it to the passwd walkthrough and the Anderson taxonomy for the full threat-model answer.",
            },
            examQuestions: [
              {
                q: "Explain UNIX privileges (real/effective uid, setuid) with the passwd walkthrough, the escalation risk, mitigations, and the intruder/threat taxonomy (Anderson classes).",
                marks: 14,
                outline: [
                  "Real uid = identity; effective uid = permission basis",
                  "setuid bit: process runs with file owner's identity",
                  "passwd: setuid root -> shadow write -> privilege drop",
                  "Escalation: overflow in a setuid binary = local root",
                  "Mitigations: minimal setuid, early drop, capabilities, nosuid mounts",
                  "Anderson: masquerader, misfeasor, clandestine user",
                  "Clock integrity underpins audit trails - NTP auth",
                ],
              },
              {
                q: "Distinguish the masquerader, misfeasor and clandestine user.",
                marks: 7,
                outline: [
                  "Masquerader: outsider using stolen credentials",
                  "Misfeasor: legitimate insider misusing access",
                  "Clandestine: seizes supervisory control and hides",
                ],
              },
            ],
          },
          {
            number: "2.6",
            title: "Principles of concurrency in the kernel",
            body: [
              "Concurrency inside the kernel is the syllabus's 'principles of concurrency': multiple execution sources - syscalls from many processes, interrupts, kernel threads - touch shared structures (the buffer pool, proc table, mount table), and every shared-touch is a potential race. The principles: identify the critical section, serialize with locks (spinlocks for interrupt context, mutexes/sleeplocks for process context), enforce invariants (locked buffers stay off the free list), and order lock acquisition to prevent deadlock (AB-BA prevention).",
              "A worked race fixes the motivation: two processes call getblk simultaneously for different blocks; both walk the free list concurrently; without locking, both take the same buffer - one buffer, two owners, file-system corruption. The fix: lock the free list (or the buffer) around the walk; interrupts handling completion must use spinlocks because sleeping in interrupt context is illegal. This is Unit I's buffer cache re-read as a concurrency problem - the syllabus's pairing is deliberate.",
              "The kernel-specific constraints complete the principles: interrupt handlers cannot sleep (spinlocks only); process-context code may sleep on mutexes; lock hold times must be short (interrupt latency); and deadlock avoidance needs a global lock order (buffer lock before free-list lock, never reversed). The security angle: races in kernel code are exploitable (TOCTOU in permission checks, double-free of shared buffers) - kernel concurrency discipline IS kernel security discipline.",
              "Exam framing: expect 'explain the principles of concurrency in operating systems'. Give the execution-source list, the getblk race with its lock fix, the spin-vs-mutex rule, and the lock-order discipline. The kernel-race-is-exploitable sentence is the security hook.",
            ],
            keyTerms: [
              { term: "Critical section", definition: "Code touching shared kernel state - must be serialized." },
              { term: "Spinlock vs mutex", definition: "Busy-wait for interrupt context; sleep-lock for process context." },
              { term: "Kernel race", definition: "Concurrent access to shared structures - buffer pools, tables." },
              { term: "Lock ordering", definition: "Global acquisition order preventing AB-BA deadlock." },
              { term: "TOCTOU", definition: "Time-of-check-to-time-of-use race - exploitable when checks and uses race." },
            ],
            table: {
              caption: "Kernel execution sources and their lock rules.",
              headers: ["Source", "May sleep?", "Lock type"],
              rows: [
                ["Syscall (process context)", "yes", "mutex/sleeplock"],
                ["Interrupt handler", "never", "spinlock"],
                ["Kernel thread/workqueue", "yes", "mutex/sleeplock"],
                ["Bottom half/softirq", "no", "spinlock with IRQs disabled"],
              ],
            },
            bullets: [
              "Execution sources: syscalls, interrupts, kernel threads - all share state.",
              "Critical sections: buffer pool, proc table, mount table operations.",
              "getblk race: two takers, one buffer - lock the walk.",
              "Interrupt context: spinlocks only - sleeping is illegal there.",
              "Global lock order prevents AB-BA deadlock.",
              "Kernel races are exploitable: TOCTOU checks, double-frees.",
            ],
            diagram: {
              kind: "fork",
              title: "Choosing the lock by context",
              caption: "Sleep or spin - the execution context decides.",
              start: "Code needs a kernel lock",
              branches: [
                { label: "Process context, may block", outcome: "mutex/sleeplock - waiters sleep, long holds fine", good: true },
                { label: "Interrupt context", outcome: "spinlock - busy-wait, minimal hold time", good: true },
                { label: "Nested acquisition", outcome: "relock same lock? reentrant design or restructure", good: true },
                { label: "Reverse order elsewhere", outcome: "AB-BA deadlock - fix the global order", good: false },
              ],
            },
            callout: {
              type: "exam",
              title: "Kernel races are kernel exploits",
              body: "The security sentence: 'a kernel race is not just a bug - it is a privilege boundary crossed by timing: TOCTOU in a permission check or a double-taken buffer both hand attacker-controlled outcomes'. Pair it with the getblk race walkthrough; the syllabus's concurrency section is where OS security and OS internals meet.",
            },
            examQuestions: [
              {
                q: "Explain the principles of concurrency in operating systems: execution sources, critical sections with the getblk race as the worked example, spinlock vs mutex selection, and lock-ordering discipline.",
                marks: 14,
                outline: [
                  "Sources: syscalls, interrupts, kernel threads sharing state",
                  "Shared structures: buffer pool, proc table, mount table",
                  "getblk race: two takers, one buffer - serialize the walk",
                  "Interrupt context: spinlocks only - sleep is illegal",
                  "Process context: mutexes with sleeping waiters",
                  "Global lock order prevents AB-BA deadlock",
                  "Security: kernel races = privilege-boundary bugs (TOCTOU)",
                ],
              },
              {
                q: "Why may an interrupt handler not sleep on a mutex?",
                marks: 7,
                outline: [
                  "It interrupted an arbitrary process - no owner to block on its behalf",
                  "Sleeping would stall the interrupted context indefinitely",
                  "Spinlocks busy-wait instead - short holds mandatory",
                ],
              },
            ],
          },
          {
            number: "2.7",
            title: "IPC - process tracing, System V IPC, shared memory and semaphores",
            body: [
              "The syllabus's IPC toolkit has three named parts. Process tracing (ptrace): one process controls another - breakpoints, single-stepping, register/memory inspection; debuggers and sandbox/honeypot analysis (Unit III) are its legitimate faces; anti-debugging is malware's countermeasure. System V IPC: three persistent-kernel object families - message queues (typed messages), shared memory (common pages mapped into several address spaces), and semaphores (kernel counters for synchronization) - each created with a key via xxxget, controlled via xxxctl, used until xxxrm removal.",
              "A worked shared-memory pair fixes the pattern: shmid = shmget(key, size, IPC_CREAT|0600); addr = shmat(shmid, NULL, 0); processes map the same pages and read/write directly - the fastest IPC (no copies), guarded by semaphores: semid = semget(key, 1, IPC_CREAT|0600); P = semop(-1) decrements and blocks at zero, V = semop(+1) releases - the canonical mutual exclusion across processes. The System V lifecycle note: objects outlive their creators until IPC_RMID - leak discipline matters.",
              "The chooser and security notes complete the section: pipes/sockets for streams, System V shared memory for hot data with semaphore-guarded access, message queues for typed async delivery, ptrace for observation. Security: shared memory is raw trust - both parties can corrupt it (validate at boundaries); ptrace is restricted (ptrace_scope on hardened systems) because a tracer can inject into any of its children's spaces - the debugging superpower is the escalation superpower.",
              "Exam framing: expect 'explain System V IPC (shared memory, semaphores, message queues)' and 'what is process tracing'. Give the shmget/shmat/semop walkthrough, the object lifecycle, and the chooser. The ptrace-power sentence is the security mark.",
            ],
            keyTerms: [
              { term: "ptrace", definition: "Tracer controls a tracee: breakpoints, stepping, register/memory access." },
              { term: "shmget/shmat", definition: "Allocate and attach System V shared memory - zero-copy IPC." },
              { term: "semop", definition: "Semaphore P/V operations - cross-process mutual exclusion." },
              { term: "IPC key", definition: "The name by which independent processes find the same IPC object." },
              { term: "IPC_RMID", definition: "Explicit removal - System V objects outlive creators otherwise." },
            ],
            table: {
              caption: "The IPC chooser with security notes.",
              headers: ["Mechanism", "Shape", "Security note"],
              rows: [
                ["Pipes", "unidirectional stream, related processes", "close discipline; fd leaks"],
                ["Sockets", "general, network-capable", "authenticate endpoints"],
                ["Shared memory + semaphores", "zero-copy shared pages + sync", "raw trust - validate contents"],
                ["Message queues", "typed async messages", "persistent until RMID"],
                ["ptrace", "tracer over tracee", "restricted (ptrace_scope) - injection power"],
              ],
            },
            bullets: [
              "System V trio: message queues, shared memory, semaphores - keyed objects.",
              "Lifecycle: xxxget (create/find), use, xxxctl, xxxrm (IPC_RMID).",
              "Shared memory: fastest IPC - both parties map the same pages.",
              "Semaphores: P blocks at zero, V releases - cross-process locks.",
              "ptrace: debuggers, sandboxing, anti-debugging - restricted by ptrace_scope.",
              "Chooser: streams -> pipes/sockets; hot data -> shm; observation -> ptrace.",
            ],
            diagram: {
              kind: "flow",
              title: "Producer-consumer over shared memory + semaphore",
              caption: "The fastest IPC pattern, synchronized at the kernel counter.",
              steps: [
                { label: "shmget", note: "one keyed shared region" },
                { label: "shmat x2", note: "both processes map the pages" },
                { label: "P (semop -1)", note: "consumer waits; mutual exclusion held" },
                { label: "Read/write", note: "direct memory access - zero copies" },
                { label: "V (semop +1)", note: "release; counterpart proceeds" },
              ],
            },
            callout: {
              type: "warning",
              title: "ptrace is injection by another name",
              body: "The security sentence: 'ptrace can read and write the tracee's memory and registers - the same primitives debuggers use are what exploits use, which is why hardened systems restrict ptrace via prctl/ptrace_scope'. Shared memory's corollary: contents are only as trustworthy as the least trustworthy mapper. Both sentences belong in the IPC answer.",
            },
            examQuestions: [
              {
                q: "Explain System V IPC: shared memory with shget/shmat, semaphores with semop P/V, message queues, and the object lifecycle. Describe process tracing (ptrace) and its security implications.",
                marks: 14,
                outline: [
                  "Three families: queues, shared memory, semaphores - keyed",
                  "shmget -> shmat: same pages mapped in both address spaces",
                  "semop: P decrements/blocks; V releases - mutual exclusion",
                  "Lifecycle: create, use, xxxctl, IPC_RMID - objects outlive creators",
                  "ptrace: breakpoints, stepping, register/memory access",
                  "Legitimate: debuggers, sandbox analysis; restricted by ptrace_scope",
                  "Security: shared memory is raw trust; ptrace is injection power",
                ],
              },
              {
                q: "Why is shared memory called zero-copy IPC, and what does that cost?",
                marks: 7,
                outline: [
                  "No kernel copies - both processes read/write the same pages",
                  "Cost: no format enforcement - corruption is mutual",
                  "Synchronization (semaphores) is entirely the programmers' job",
                ],
              },
            ],
          },
        ],
      },
    },
    {
      number: 3,
      roman: "III",
      title: "Security and Protection in Operating Systems",
      summary:
        "Unit III is the security core: access control and auditing with trusted computing and the Multics heritage, then the malware track - analysis methodology, viruses/worms/trojans, rootkits, ransomware and polymorphism, and honeypot-based capture and analysis.",
      chapter: {
        number: "03",
        title: "Protecting the Operating System",
        intro:
          "Unit III covers access control, auditing, trusted computing, Multics and commercial operating systems, malware analysis, protection against viruses, worms and trojans, rootkits, ransomware, polymorphic malware, and malware capture and analysis using honeypots.",
        inOneBreath:
          "Protection is the reference monitor: subjects, objects, rights - DAC, MAC, RBAC and capabilities; auditing records the monitor's verdicts; trusted computing formalizes the base (TCB). Malware meets it as the adversary: static/dynamic analysis, rootkits that hook the kernel, ransomware that monetizes denial, polymorphism that evades signatures - and honeypots that invite capture.",
        sections: [
          {
            number: "3.1",
            title: "Access control in operating systems",
            body: [
              "Access control is the OS protection mechanism: subjects (processes acting for users), objects (files, devices, memory, IPC), and rights (read, write, execute, own) mediated by a reference monitor - the always-invoked, tamper-proof, small-enough-to-verify mediator. The four policy families: DAC (owners grant - UNIX modes/ACLs), MAC (system policy overrules owners - labels and clearances, SELinux/AppArmor), RBAC (roles map permissions - enterprise model), and capability-based (unforgeable tokens - what you hold, not who you are).",
              "A worked UNIX mode check fixes DAC: open('/etc/shadow', O_RDONLY) - kernel compares effective uid against file owner (user bits), supplementary groups (group bits), or 'other' bits; deny wins ties; root bypasses via CAP_DAC_OVERRIDE. An ACL extension refines it: named users/groups beyond the owner/group/other triad. The MAC contrast: SELinux policies label every process and object (type enforcement - a web server domain may read only httpd_t-labelled files) - even a compromised root cannot leave its domain, which is exactly the containment DAC cannot give.",
              "The design tensions complete the section: DAC's flexibility breeds over-sharing (the 'chmod 777' pathology); MAC's rigidity demands policy engineering (the SELinux 'why won't it run' cost); RBAC scales organizationally but lags reality (role explosion); capabilities fix confused-deputy problems (rights travel with the token, not the ambient authority) but need infrastructure. The reference-monitor triad - complete mediation, tamper-proof, verifiable - is the exam's conceptual anchor; every mechanism is scored against it.",
              "Exam framing: expect 'explain access control models with the reference monitor'. Define subject/object/right, walk the UNIX DAC check, contrast SELinux MAC, and score the four families against the reference-monitor triad. The 'deny wins' and 'MAC contains root' sentences are the marks.",
            ],
            keyTerms: [
              { term: "Reference monitor", definition: "Always-invoked, tamper-proof, verifiable mediator of every access." },
              { term: "DAC", definition: "Discretionary control - owners grant rights (UNIX modes, ACLs)." },
              { term: "MAC", definition: "Mandatory control - system labels overrule owners (SELinux, AppArmor)." },
              { term: "RBAC", definition: "Roles map users to permission sets - the organizational model." },
              { term: "Capability", definition: "Unforgeable token carrying rights - authority held, not ambient." },
            ],
            table: {
              caption: "Four access-control families, one comparison.",
              headers: ["Model", "Grant mechanism", "Strength", "Weakness"],
              rows: [
                ["DAC", "owner discretion (modes/ACLs)", "flexible, familiar", "over-sharing; confused deputy"],
                ["MAC", "system labels/clearances", "contains even root", "policy engineering cost"],
                ["RBAC", "role membership", "organizational scale", "role explosion"],
                ["Capabilities", "held tokens", "no ambient authority", "infrastructure/interop"],
              ],
            },
            bullets: [
              "Reference monitor triad: complete mediation, tamper-proof, verifiable.",
              "DAC: UNIX owner/group/other + ACLs; deny wins; root overrides.",
              "MAC: type enforcement labels - compromised root stays in-domain.",
              "RBAC: users -> roles -> permissions; organizational fit.",
              "Capabilities: rights travel with tokens - fixes confused-deputy.",
              "Every mechanism is scored against the monitor triad.",
            ],
            diagram: {
              kind: "compare",
              title: "DAC vs MAC on the same compromise",
              caption: "What contains a rooted process? Only mandatory control answers.",
              left: {
                heading: "DAC (UNIX modes)",
                items: [
                  "Owner decides access - flexible",
                  "root bypasses everything (CAP_DAC_OVERRIDE)",
                  "Compromised root reads any file",
                  "Over-sharing is the normal failure",
                ],
              },
              right: {
                heading: "MAC (SELinux/AppArmor)",
                items: [
                  "Labels on every process and object",
                  "Type enforcement bounds even root",
                  "Compromised web server stays in httpd_t",
                  "Cost: policy engineering",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "The triad is the grading rubric",
              body: "Answer every access-control question against the reference-monitor triad: 'complete mediation - every access checked; tamper-proof - the monitor cannot be bypassed; verifiable - small enough to prove'. Then DAC/MAC/RBAC/capabilities as four implementations. Examiners grade the triad first; the families are the examples.",
            },
            examQuestions: [
              {
                q: "Explain access control in operating systems: the reference-monitor model, the four policy families (DAC, MAC, RBAC, capabilities) with a worked UNIX permission check and the SELinux contrast.",
                marks: 14,
                outline: [
                  "Subjects, objects, rights; reference monitor triad",
                  "DAC: owner/group/other bits; deny wins; root override",
                  "ACL refinement beyond the triad",
                  "MAC: labels and type enforcement - contains compromised root",
                  "RBAC: roles -> permissions; role-explosion cost",
                  "Capabilities: unforgeable tokens; fixes confused deputy",
                  "Score each family against the triad",
                ],
              },
              {
                q: "Why can MAC contain a compromised root process when DAC cannot?",
                marks: 7,
                outline: [
                  "DAC defers to root via CAP_DAC_OVERRIDE",
                  "MAC labels are system-owned - owners cannot re-label",
                  "Type enforcement bounds even privileged processes",
                ],
              },
            ],
          },
          {
            number: "3.2",
            title: "Auditing and trusted computing",
            body: [
              "Auditing is protection's memory: the audit subsystem records security-relevant events - logins, privilege changes, file accesses on sensitive paths, syscall patterns - into tamper-resistant trails. The design requirements: completeness (all named events), integrity (append-only, hash-chained or remotely shipped - an attacker must not edit their own trail), and analyzability (structured, correlated). Linux auditd, Windows Security log with SACLs, and macOS's unified log are the deployed instances.",
              "A worked audit configuration fixes the mechanics: auditctl -w /etc/shadow -p rwa -k shadow-access records every open/read/write/attribute change on the shadow file with a key for later ausearch; the record carries timestamp, uid, syscall, path, result. Windows' SACL: an object carries an audit ACE ('failed writes by Everyone') that directs Event Log entries. The analysis discipline: alerts on patterns (failed-logon spikes, privilege escalation chains), not noise - auditing earns its cost only when someone reads it.",
              "Trusted computing is protection's formal base: the Trusted Computing Base (TCB) - hardware + kernel + the security mechanisms whose failure breaks all guarantees - and the reference-monitor triad it must satisfy; TCSEC (Orange Book)分级 B1/B2/A1 formalized it historically. Modern trusted computing adds measured boot (TPM hashes each boot stage into PCR registers - tampering with boot changes the measurements), remote attestation (prove your measured state to a verifier), and sealed storage (keys released only to measured states). The chain: TCB defines what must be trusted; TPM makes the trusting verifiable.",
              "Exam framing: expect 'explain auditing requirements' and 'the TCB/TPM model'. Give the auditd/SACL examples, the three audit requirements, and the measured-boot chain. The 'attacker must not edit their own trail' sentence is the auditing spine; 'TPM makes trusting verifiable' is the trusted-computing spine.",
            ],
            keyTerms: [
              { term: "Audit trail", definition: "Append-only record of security events - completeness, integrity, analyzability." },
              { term: "SACL", definition: "Windows System ACL directing object accesses into the Security log." },
              { term: "TCB", definition: "Trusted Computing Base - the mechanism set whose failure breaks all guarantees." },
              { term: "TPM", definition: "Hardware root of trust: measured boot PCRs, attestation, sealed storage." },
              { term: "Remote attestation", definition: "Cryptographic proof of a machine's measured software state." },
            ],
            table: {
              caption: "Audit requirements and their failure modes.",
              headers: ["Requirement", "Content", "Failure when violated"],
              rows: [
                ["Completeness", "all named security events recorded", "invisible attacker actions"],
                ["Integrity", "append-only; attacker cannot edit", "trail rewritten to hide tracks"],
                ["Analyzability", "structured, correlated, alertable", "records exist but nobody reads them"],
                ["Synchronization", "trusted timestamps (NTP auth)", "timeline corrupted - forensics blind"],
              ],
            },
            bullets: [
              "Auditing = protection's memory: logins, privilege changes, sensitive access.",
              "auditd -w /etc/shadow -p rwa: the worked Linux example.",
              "Windows SACL: audit ACEs direct Event Log records.",
              "Integrity: append-only/hash-chained/remote-shipped trails.",
              "TCB: the base whose failure breaks everything - keep it small.",
              "TPM: measured boot PCRs -> attestation -> sealed storage.",
            ],
            diagram: {
              kind: "flow",
              title: "Measured boot with a TPM",
              caption: "Each stage measures the next - tampering shows in the PCRs.",
              steps: [
                { label: "TPM root of trust", note: "hardware-measured CRTM" },
                { label: "Measure bootloader", note: "hash into PCR registers" },
                { label: "Measure kernel", note: "chain extends per stage" },
                { label: "Attest", note: "signed PCR quote to a verifier" },
                { label: "Seal/unseal", note: "keys released only to measured states" },
              ],
            },
            callout: {
              type: "tip",
              title: "Two spines, two sentences",
              body: "Auditing's spine: 'an attacker must not be able to edit their own trail - append-only, hash-chained or shipped off-box'. Trusted computing's spine: 'the TCB defines what must be trusted; the TPM makes the trusting verifiable through measured boot and attestation'. One sentence each, then the examples - that structure answers both halves cleanly.",
            },
            examQuestions: [
              {
                q: "Explain OS auditing: the three requirements, auditd and SACL examples with a worked rule, and the analysis discipline. Then explain trusted computing: TCB, measured boot with TPM PCRs, attestation and sealed storage.",
                marks: 14,
                outline: [
                  "Audit requirements: completeness, integrity, analyzability",
                  "auditctl -w /etc/shadow -p rwa -k key: the worked rule",
                  "Windows SACL: audit ACE -> Security log",
                  "Integrity: append-only/hash-chained/off-box shipping",
                  "TCB: hardware+kernel+mechanisms - keep small and verifiable",
                  "TPM measured boot: PCRs chained per stage",
                  "Attestation + sealed storage close the model",
                ],
              },
              {
                q: "Why must audit trails be append-only and often shipped off the host?",
                marks: 7,
                outline: [
                  "Root-level attackers edit local logs",
                  "Remote shipping preserves evidence beyond attacker reach",
                  "Integrity is the audit's entire value",
                ],
              },
            ],
          },
          {
            number: "3.3",
            title: "Multics and the commercial operating systems",
            body: [
              "Multics (MIT/Bell Labs/GE, 1960s-70s) is the syllabus's heritage name: the first OS designed with security as an architectural goal - hardware protection rings (ring 0 kernel to ring 3 user, with intermediate rings for less-trusted subsystems), segment-based memory with per-segment ACLs, and the reference-monitor ideal formally articulated. Its security architecture paper (Saltzer-Schroeder 1975) gave the field its principles: least privilege, economy of mechanism, fail-safe defaults, complete mediation, separation, psychological acceptability.",
              "A worked principle-to-mechanism mapping fixes the heritage: least privilege -> setuid drop and capabilities (Unit II); complete mediation -> every syscall validated (Unit I's gate); fail-safe defaults -> deny-by-default ACLs; economy of mechanism -> small TCB (section 3.2); open design -> Kerckhoffs-style published algorithms (Unit-cryptography's Kerckhoffs); psychological acceptability -> usable permission UIs. Each principle names a deployed mechanism - the mapping is the exam's expected demonstration that 1970s theory still prices modern code.",
              "The commercial lineage completes the frame: UNIX descended from Multics (Thompson's stripped-down reaction), and commercial OSes absorbed the ring idea (x86 rings 0-3, hypervisors at '-1'), ACLs (NTFS), and MAC (SELinux from NSA's Flask architecture; Windows integrity levels). The heritage lesson: every modern mechanism is a Multics principle wearing new clothes - and the syllabus asks the student to recognize the clothes.",
              "Exam framing: expect 'explain Multics' contributions to OS security' and 'the Saltzer-Schroeder principles with modern examples'. Give the rings, the principles-to-mechanisms mapping, and the lineage sentence. The mapping table is the answer's spine.",
            ],
            keyTerms: [
              { term: "Protection rings", definition: "Privilege hierarchy (0 kernel ... 3 user) - Multics' hardware architecture." },
              { term: "Reference monitor ideal", definition: "Formalized in Multics: complete mediation, tamper-proof, verifiable." },
              { term: "Saltzer-Schroeder principles", definition: "Least privilege, economy, fail-safe defaults, complete mediation, open design, etc." },
              { term: "Segment + ACL", definition: "Multics' memory model - per-segment access lists." },
              { term: "Flask/SELinux lineage", definition: "NSA's MAC architecture - the modern MAC deployment." },
            ],
            table: {
              caption: "Principles to mechanisms - the heritage mapping.",
              headers: ["Principle (1975)", "Meaning", "Modern mechanism"],
              rows: [
                ["Least privilege", "minimum rights needed", "privilege drop, capabilities"],
                ["Complete mediation", "check every access", "syscall-gate validation"],
                ["Fail-safe defaults", "deny by default", "default-deny ACLs/policies"],
                ["Economy of mechanism", "small, simple TCB", "microkernels, minimal setuid"],
                ["Open design", "security not in secrecy", "published algorithms (Kerckhoffs)"],
                ["Separation", "isolate subjects/domains", "rings, VMs, containers"],
              ],
            },
            bullets: [
              "Multics: rings, segmented memory with ACLs, formal reference monitor.",
              "Saltzer-Schroeder 1975: the principles still grading modern systems.",
              "Least privilege -> capability systems and privilege drop.",
              "Complete mediation -> syscall-gate validation (Unit I).",
              "Fail-safe defaults -> deny-by-default policies.",
              "Lineage: UNIX from Multics; rings -> x86/hypervisors; Flask -> SELinux.",
            ],
            diagram: {
              kind: "pyramid",
              title: "Protection rings, Multics to x86",
              caption: "Privilege narrows toward the top - the ring idea survives everywhere.",
              tiers: [
                { label: "Ring 0 / kernel", note: "full privilege - kernel, drivers" },
                { label: "Ring 1-2", note: "intermediate subsystems (rarely used)" },
                { label: "Ring 3 / user", note: "applications - unprivileged" },
                { label: "Hypervisor (-1)", note: "modern addition above the kernel" },
              ],
            },
            callout: {
              type: "tip",
              title: "Principles wear new clothes",
              body: "The heritage sentence examiners reward: 'every modern security mechanism is a Saltzer-Schroeder principle implemented in new clothes - SELinux is complete mediation plus fail-safe defaults; hypervisors are rings moved down a level'. Then deliver the mapping table; recognition of the lineage is exactly what the Multics question tests.",
            },
            examQuestions: [
              {
                q: "Explain Multics' security architecture (rings, segments, reference monitor) and map the Saltzer-Schroeder principles onto modern operating-system mechanisms.",
                marks: 14,
                outline: [
                  "Multics: hardware rings 0-3, segmented memory with ACLs",
                  "Formal reference-monitor ideal articulated there",
                  "Saltzer-Schroeder 1975: the principle set",
                  "Least privilege -> privilege drop, capabilities",
                  "Complete mediation -> syscall-gate checks",
                  "Fail-safe defaults -> deny-by-default policies",
                  "Lineage: UNIX descends from Multics; Flask -> SELinux",
                ],
              },
              {
                q: "State and explain three Saltzer-Schroeder principles with one modern example each.",
                marks: 7,
                outline: [
                  "Least privilege: capability systems / privilege drop",
                  "Complete mediation: syscall-gate validation",
                  "Fail-safe defaults: default-deny ACLs",
                ],
              },
            ],
          },
          {
            number: "3.4",
            title: "Malware analysis",
            body: [
              "Malware analysis is the syllabus's adversary-study discipline: given a sample, determine what it does, how it propagates, and how to detect it - via static analysis (inspect without running: strings, headers, imports, disassembly, decompilation) and dynamic analysis (run in an isolated sandbox and observe: file/registry/network/syscall traces). The methodology ladder: triage (hash, type, packer detection), static overview, controlled detonation, deep reverse engineering - escalating effort only as needed.",
              "A worked triage fixes the shape: SHA-256 the sample (identification against threat intel), file type (PE/ELF/script), packer heuristic (entropy above 7.2 suggests packing), strings triage (URLs, registry keys, mutexes - mutexes double as single-instance flags), import table (VirtualAlloc + WriteProcessMemory + CreateRemoteThread = process injection signature). Then detonate in a sandbox with network simulation (INetSim/FakeNet) and record: created files, persistence keys, C2 domains, the kill chain stage.",
              "The analysis outputs are the exam's deliverables: IOCs (hashes, domains, IPs, mutexes, registry keys - the detection currency), the behaviour profile (persistence, evasion, C2 protocol, payload), and detection recommendations (YARA rules matching distinctive strings/byte patterns, behavioural detections on the observed chain). The counter-analysis arms race: packers/obfuscation defeat static, sandbox-evasion (VM checks, sleep skips, mouse-movement checks) defeats naive dynamic - hence Unit III's honeypots and Unit IV's hardened sandboxes.",
              "Exam framing: expect 'explain static and dynamic malware analysis' and 'IOCs'. Walk the triage sequence with one signature interpretation (the injection import pattern), the sandbox methodology, and the IOC/YARA outputs. The arms-race closing sentence is the differentiator.",
            ],
            keyTerms: [
              { term: "Static analysis", definition: "Inspect the sample without executing - strings, imports, disassembly." },
              { term: "Dynamic analysis", definition: "Detonate in a sandbox and observe file/network/syscall behaviour." },
              { term: "IOC", definition: "Indicator of compromise - hashes, domains, mutexes, registry keys." },
              { term: "YARA rule", definition: "Pattern-based detection over strings/byte sequences - the analyst's output format." },
              { term: "Packer/entropy", definition: "High entropy (~>7.2) signals packed content defeating static analysis." },
            ],
            table: {
              caption: "Triage signals and what they reveal.",
              headers: ["Signal", "Observation", "Inference"],
              rows: [
                ["Entropy", "> 7.2 across sections", "packed/encrypted - static blinded"],
                ["Imports", "VirtualAlloc + WriteProcessMemory + CreateRemoteThread", "process injection capability"],
                ["Strings", "mutex GUID, C2 domain, 'ransom' note", "single-instance flag, C2, payload type"],
                ["Sandbox", "sleep loops + mouse checks", "evasion logic - needs long-run capture"],
                ["Persistence", "Run key, scheduled task, service", "survives reboot - hunt the key"],
              ],
            },
            bullets: [
              "Ladder: triage -> static overview -> controlled detonation -> deep RE.",
              "Hash, type, entropy, strings, imports - the triage five.",
              "Import signature: VirtualAlloc + WriteProcessMemory + CreateRemoteThread = injection.",
              "Sandbox: isolated VM, simulated network, full syscall/file/net tracing.",
              "Outputs: IOCs + behaviour profile + YARA/behavioural detections.",
              "Arms race: packers vs static; sandbox-evasion vs dynamic - honeypots adapt.",
            ],
            diagram: {
              kind: "pipeline",
              title: "The malware analysis pipeline",
              caption: "Escalate effort only as the sample resists.",
              stages: [
                { label: "Triage", note: "hash, type, entropy, strings" },
                { label: "Static overview", note: "imports, headers, disassembly" },
                { label: "Detonate", note: "sandbox + simulated network" },
                { label: "Correlate", note: "IOCs, persistence, C2 chain" },
                { label: "Productize", note: "YARA rules + behavioural detections" },
              ],
            },
            callout: {
              type: "tip",
              title: "IOCs are the deliverable",
              body: "The differentiating sentence: 'analysis without artifacts is a walkthrough - the deliverables are IOCs and detection rules that other systems can act on'. The import-pattern interpretation (injection triplet) is the specific signature examiners like to see read aloud; the entropy threshold (7.2) is the free mark.",
            },
            examQuestions: [
              {
                q: "Explain malware analysis: the static/dynamic methodology ladder, a worked triage (hash, entropy, imports, strings), sandbox detonation practice, and the outputs (IOCs, YARA rules).",
                marks: 14,
                outline: [
                  "Ladder: triage -> static -> detonation -> deep RE",
                  "Static: strings, headers, imports, disassembly - no execution",
                  "Entropy > 7.2 suggests packing - static blinded",
                  "Injection signature: VirtualAlloc + WriteProcessMemory + CreateRemoteThread",
                  "Dynamic: sandbox VM, simulated network, full tracing",
                  "Outputs: IOCs (hash/domain/mutex/key) + YARA rules",
                  "Arms race: packers and sandbox-evasion drive the methodology",
                ],
              },
              {
                q: "Why do malware samples include mutex creation and mouse-movement checks?",
                marks: 7,
                outline: [
                  "Mutex: single-instance flag - one infection per machine",
                  "Mouse check: sandbox/automation detection",
                  "Both are evasion logic - behaviour, not payload",
                ],
              },
            ],
          },
          {
            number: "3.5",
            title: "Viruses, worms and trojans - OS-level protection",
            body: [
              "The malware families differ by propulsion, and the OS defends differently against each. Virus: attaches to a host file/boot sector, needs user action - OS defences: executable whitelisting, macro policy, file-integrity checking (hash baselines - tripwire-style), and attachment scanning. Worm: self-propagates via network exploits - defences: patching cadence, network segmentation, host firewalls; the OS surface is the unpatched service, not the user. Trojan: arrives disguised, user-installed - defences: code signing (verify publisher before run), provenance controls, application control.",
              "A worked integrity-check fixes the virus defence: baseline every system binary's SHA-256 at build time (or first trusted boot); a daily job re-hashes and diffs - any modified system binary (a virus's preferred host) alarms immediately; attackers respond by also tampering with the checker (which is why rootkits, section 3.6, are the escalation). The worm defence walkthrough: WannaCry exploited SMBv1 - segmentation (SMB reachable only where needed), patch discipline, and egress filtering each independently break the chain; defense-in-depth is the explicit lesson.",
              "The OS's structural protections complete the section: least privilege (malware inherits the process's rights - non-admin users contain damage), address-space isolation (one process's infection does not read another's memory), ASLR/DEP/canaries (making exploitation unreliable), and application allowlisting (whitelisting as the deny-by-default extreme). Each maps to a Saltzer-Schroeder principle (section 3.3) - the malware-defence answer is the principles answer with teeth.",
              "Exam framing: expect 'compare virus/worm/trojan and give OS defences per family'. Give the propulsion distinction, the integrity-check walkthrough, the WannaCry segmentation lesson, and the structural protections list. The per-family defence mapping is the marks' spine.",
            ],
            keyTerms: [
              { term: "File integrity checking", definition: "Hash baselines of system binaries; diffs alarm on modification." },
              { term: "Application whitelisting", definition: "Deny-by-default execution control - only known-good binaries run." },
              { term: "Code signing", definition: "Publisher-signed binaries - tampering or unsigned provenance alarms." },
              { term: "DEP/NX + ASLR", definition: "Non-executable data pages and randomized layout - exploitation reliability killers." },
              { term: "Least privilege", definition: "Malware inherits process rights - non-admin users cap the blast radius." },
            ],
            table: {
              caption: "Family vs propulsion vs OS defence.",
              headers: ["Family", "Propulsion", "Primary OS defence"],
              rows: [
                ["Virus", "host-attached, user action", "integrity checking + macro policy + scanning"],
                ["Worm", "network self-propagation", "patching + segmentation + host firewall"],
                ["Trojan", "deception, user-installed", "code signing + application control"],
                ["Rootkit (3.6)", "kernel concealment", "secure/measured boot, integrity layers"],
              ],
            },
            bullets: [
              "Virus: user-action propulsion - integrity baselines catch host tampering.",
              "Worm: exploit propulsion - patch/segment/filter break the chain (WannaCry).",
              "Trojan: deception propulsion - signing and provenance verify identity.",
              "Structural: least privilege, isolation, ASLR/DEP, whitelisting.",
              "Every defence maps to a Saltzer-Schroeder principle.",
              "Attackers tamper with the checker - hence rootkits as the escalation.",
            ],
            diagram: {
              kind: "fork",
              title: "Malware family -> defence that actually works",
              caption: "Match the defence to the propulsion, not to fear.",
              start: "Malware inbound",
              branches: [
                { label: "Rides a host file", outcome: "virus - hash baselines + macro policy + scanning", good: true },
                { label: "Exploits a network service", outcome: "worm - patching + segmentation + egress filter", good: true },
                { label: "Arrives disguised as software", outcome: "trojan - code signing + application control", good: true },
                { label: "Hides in the kernel", outcome: "rootkit - measured boot + integrity layers (3.6)", good: true },
              ],
            },
            callout: {
              type: "warning",
              title: "The checker is also a target",
              body: "The escalation sentence: 'integrity checking works until the malware tampers with the checker - which is precisely the rootkit escalation of section 3.6'. Then the mitigation: protect the checker's baseline off-host (remotely stored hashes) or anchor it in measured boot. State the escalation; it is what separates a complete malware-defence answer from a naive one.",
            },
            examQuestions: [
              {
                q: "Compare viruses, worms and trojans by propulsion and give the OS-level defence for each, with a worked integrity-check example and the WannaCry segmentation lesson.",
                marks: 14,
                outline: [
                  "Virus: host-attached, user action -> integrity baselines + scanning",
                  "Worm: network self-propagation -> patch, segment, filter (WannaCry/SMBv1)",
                  "Trojan: deception -> code signing + application control",
                  "Integrity walkthrough: SHA-256 baselines, daily diff, alarm on change",
                  "Checker tampering -> rootkit escalation (3.6); off-host baselines",
                  "Structural: least privilege, isolation, ASLR/DEP, whitelisting",
                  "Defences map to Saltzer-Schroeder principles",
                ],
              },
              {
                q: "Why does running daily work as a non-admin user contain malware damage?",
                marks: 7,
                outline: [
                  "Malware inherits the process's privileges",
                  "Non-admin cannot write system paths or install services",
                  "Blast radius caps at the user's own files",
                ],
              },
            ],
          },
          {
            number: "3.6",
            title: "Rootkits, ransomware and polymorphic malware",
            body: [
              "Three advanced families headline the syllabus's list. Rootkit: malware whose payload is concealment - userland (library/ls tampering), kernel (syscall/table/driver hooks - Unit II's kernel-concurrency structures hijacked), firmware/UEFI (below the OS entirely). The classic tell: ps omits a process, netstat omits a connection - the tooling lies because the tooling runs inside the lie. Detection moves below the kit: memory forensics from outside, cross-view diffing (trusted boot media vs live system), measured-boot anchoring.",
              "A worked rootkit hook walkthrough: a kernel rootkit patches the syscall table (or inline-patches the syscall entry) so sys_getdents64 filters a chosen PID from directory listings - ps and ls consult the same filtered path and report nothing. The defence chain: signed kernel modules (load-time verification), secure/measured boot (nothing unsigned below the OS), page-table protections, and memory integrity scans from a privileged external vantage (hypervisor or offline imaging).",
              "Ransomware monetizes denial: encrypt user data (AES per-file, RSA/ECC-wrapped keys), extort for the key; modern strains double-extort (exfiltrate first, threaten publication). Its OS fingerprints: mass file enumeration + high-entropy writes + shadow-copy deletion (vssadmin/shadow copies) - behavioural detections beat signature here (canary files, entropy alarms, backup-service protection). Polymorphic malware rewrites itself per copy (defeating byte signatures); metamorphic rewrites entirely - the detection shift is from what bytes look like to what behaviour does, which is the unit's through-line.",
              "Exam framing: expect 'explain rootkits with hooking', 'ransomware behaviour and defence', and 'polymorphism vs signatures'. Walk the syscall-hook filter, the behavioural ransomware tells (shadow copies, entropy), and the polymorphism-to-behaviour pivot. The 'the tooling lies' sentence is the rootkit spine.",
            ],
            keyTerms: [
              { term: "Rootkit", definition: "Concealment malware - userland, kernel (syscall hooks), or firmware level." },
              { term: "Syscall hooking", definition: "Patching syscall tables/entries to filter results (hidden PIDs, files)." },
              { term: "Cross-view detection", definition: "Diff untrusted API answers against lower-level trusted views." },
              { term: "Double extortion", definition: "Ransomware exfiltrating data before encryption - publish threat added." },
              { term: "Polymorphic/metamorphic", definition: "Per-copy rewriting (or full rewrite) defeating byte signatures." },
            ],
            table: {
              caption: "Three advanced families - behaviour and counter.",
              headers: ["Family", "Signature behaviour", "Working counter"],
              rows: [
                ["Rootkit", "tools lie: hidden PIDs/connections", "cross-view + measured boot + memory forensics"],
                ["Ransomware", "mass enumeration, entropy writes, shadow-copy deletion", "behavioural detection + canaries + protected backups"],
                ["Polymorphic", "different bytes every copy", "behavioural/heuristic detection, not signatures"],
              ],
            },
            bullets: [
              "Rootkit levels: userland, kernel (syscall/driver hooks), firmware/UEFI.",
              "Worked hook: sys_getdents64 filtered - ps/ls lie.",
              "Defences: signed modules, measured boot, cross-view, offline memory imaging.",
              "Ransomware: encrypt + extort; modern = exfiltrate first (double extortion).",
              "Ransomware tells: shadow-copy deletion, entropy spikes, canary-file touches.",
              "Polymorphism defeats byte signatures - detection pivots to behaviour.",
            ],
            diagram: {
              kind: "pyramid",
              title: "Rootkit concealment levels (index 0 = deepest)",
              caption: "The deeper the hook, the more the OS's own tools lie.",
              tiers: [
                { label: "Firmware/UEFI", note: "below the OS - survives reinstalls" },
                { label: "Kernel", note: "syscall/driver hooks - tools lie" },
                { label: "Userland", note: "library/ls tampering - visible to kernel checks" },
                { label: "Application", note: "no concealment - ordinary malware" },
              ],
            },
            callout: {
              type: "exam",
              title: "The tooling lies",
              body: "The rootkit sentence: 'a rootkit's payload is concealment - ps, ls and netstat read through the hook, so the system's own tools are compromised witnesses; detection must move below or outside the kit (cross-view, offline memory imaging, measured boot)'. Then the ransomware behavioural tells as the family contrast - both sentences are the section's grading core.",
            },
            examQuestions: [
              {
                q: "Explain rootkits (levels and syscall hooking with a worked filter), ransomware behaviour with its OS fingerprints and defences, and why polymorphic malware defeats signature detection.",
                marks: 14,
                outline: [
                  "Rootkit levels: userland, kernel hooks, firmware/UEFI",
                  "Worked hook: sys_getdents64 filters a PID - ps/ls lie",
                  "Counters: signed modules, measured boot, cross-view, memory forensics",
                  "Ransomware: encrypt + extort; double extortion adds exfiltration",
                  "Fingerprints: shadow-copy deletion, entropy writes, mass enumeration",
                  "Defences: behavioural detection, canary files, protected backups",
                  "Polymorphism rewrites per copy -> behavioural detection pivots",
                ],
              },
              {
                q: "Why is cross-view diffing effective against kernel rootkits?",
                marks: 7,
                outline: [
                  "The kit controls the API path the tools use",
                  "A lower-level view (raw disk, trusted boot) bypasses the hook",
                  "Differences reveal concealment precisely",
                ],
              },
            ],
          },
          {
            number: "3.7",
            title: "Malware capture and analysis using honeypots",
            body: [
              "A honeypot is a system deployed to be attacked - no production value, so any interaction is definitionally hostile. Types: low-interaction (emulated services - port responses, limited behaviour; cheap, safe, shallow) and high-interaction (real OSes in isolated VMs - full behaviour capture, higher risk); by purpose, research honeypots (study attackers/malware) vs production (diversion and intelligence). Related decoys: honeynets (networks of pots), tarpits (slow attackers down - LaBrea-style), and client-side pots (baited web/mail that drive-by exploits touch).",
              "A worked capture workflow fixes the methodology: deploy a high-interaction pot (vulnerable Windows XP/Server VM, unpatched by design) on an isolated VLAN with full packet capture (tcpdump at the gateway) and host sensors (syscall/process tracing); let drive-by or worm traffic find it; on interaction, snapshot memory and disk before/after; extract the dropper from the network stream or disk delta; feed the sample into section 3.4's analysis pipeline; publish IOCs. The legal/ethical frame: pots must be isolated (no innocent-user exposure), and evidence handling follows the chain-of-custody discipline.",
              "The value and limits complete the section: honeypots yield zero false positives by definition (nothing legitimate should touch them), reveal novel attacks before signatures exist, and map attacker behaviour (Unit II's actor typology in the wild); costs are maintenance burden and the escape risk (a compromised pot attacking outward - hence egress lockdown is non-negotiable). The exam's comparison with IDS: honeypots generate data; IDS detect on data - pots are sensors at the extreme end of the spectrum.",
              "Exam framing: expect 'explain honeypots and their use in malware capture'. Give the taxonomy (low/high interaction, research/production), the capture workflow (isolation + sensors + snapshot + IOC feed), and the zero-false-positive/escape-risk pair. The egress-lockdown sentence is the operational mark.",
            ],
            keyTerms: [
              { term: "Honeypot", definition: "A decoy with no production value - any interaction is hostile by definition." },
              { term: "Low vs high interaction", definition: "Emulated services vs real OSes - breadth of capture vs risk." },
              { term: "Honeynet", definition: "A network of pots with gateway capture and containment." },
              { term: "Tarpit", definition: "Deliberately slow service exhausting attacker resources." },
              { term: "Egress lockdown", definition: "Pots may not attack outward - the containment rule." },
            ],
            table: {
              caption: "Honeypot taxonomy and trade-offs.",
              headers: ["Type", "Mechanism", "Strength", "Risk/cost"],
              rows: [
                ["Low-interaction", "emulated services (ports, banners)", "cheap, safe, many", "shallow behaviour"],
                ["High-interaction", "real OS in isolated VM", "full capture, novel malware", "maintenance + escape risk"],
                ["Honeynet", "network of pots + gateway", "ecosystem view", "operational burden"],
                ["Client-side pot", "baited web/mail content", "catches drive-bys", "browser isolation needed"],
              ],
            },
            bullets: [
              "Definition: no production value -> every interaction is hostile - zero false positives.",
              "Low-interaction: emulations; high-interaction: real OSes, full behaviour.",
              "Capture: isolated VLAN + packet capture + host sensors + snapshots.",
              "Feed: dropper -> 3.4's analysis pipeline -> IOCs published.",
              "Value: novel attacks pre-signature; attacker-behaviour mapping.",
              "Non-negotiable: egress lockdown - a pot must never attack outward.",
            ],
            diagram: {
              kind: "flow",
              title: "A honeypot capture, end to end",
              caption: "From bait to IOC - the malware supply chain for analysts.",
              steps: [
                { label: "Deploy bait", note: "high-interaction VM, isolated VLAN" },
                { label: "Record everything", note: "gateway packet capture + host sensors" },
                { label: "Interaction occurs", note: "exploit lands, malware drops" },
                { label: "Snapshot", note: "memory + disk deltas before/after" },
                { label: "Analyze + publish", note: "IOC extraction into detection systems" },
              ],
            },
            callout: {
              type: "warning",
              title: "A honeypot is a weapon pointed inward - unless contained",
              body: "The operational sentence: 'a compromised honeypot is a foothold on your network - egress filtering, VLAN isolation and snapshot discipline are not optional'. Then the definitional upside: 'zero false positives by construction - every packet on the pot is signal'. The pair (value + containment) is the complete honeypot answer.",
            },
            examQuestions: [
              {
                q: "Explain honeypots: the taxonomy (low/high interaction, research/production), a worked capture workflow with isolation and sensors, the zero-false-positive property, and the containment requirements.",
                marks: 14,
                outline: [
                  "Definition: decoy with no production value - all interaction hostile",
                  "Low-interaction: emulated services; high: real isolated OSes",
                  "Honeynet: pots + gateway capture; tarpits slow attackers",
                  "Workflow: isolated VLAN, packet capture, host sensors, snapshots",
                  "Dropper fed to static/dynamic analysis (3.4) -> IOCs",
                  "Zero false positives by construction",
                  "Containment: egress lockdown - the pot must never attack out",
                ],
              },
              {
                q: "Why do honeypots have no false positives, and what cost replaces that benefit?",
                marks: 7,
                outline: [
                  "Nothing legitimate should ever touch the pot",
                  "Any interaction is intrinsically malicious",
                  "Cost: maintenance burden and escape/containment risk",
                ],
              },
            ],
          },
        ],
      },
    },
    {
      number: 4,
      roman: "IV",
      title: "Vulnerabilities, Hardening, Virtualization and Mobile Security",
      summary:
        "Unit IV is the modern hardening unit: CVE/CVSS vulnerability management, secure system configuration, virtualization for security, mobile OS security with Android's system security, application security, and the hardware tier - secure wallets and secure co-processors.",
      chapter: {
        number: "04",
        title: "Hardening the Modern Stack",
        intro:
          "Unit IV covers common vulnerabilities and exposures (CVE), secure system configuration, virtualization techniques for security, mobile operating systems security, systems security in Android, application security, secure wallets and secure co-processors.",
        inOneBreath:
          "CVEs name vulnerabilities; CVSS scores them; patching and configuration baselines close them. Virtualization isolates by construction, Android isolates by UID sandbox plus MAC, application security is the OWASP discipline, and secure wallets/co-processors push trust into hardware (TEE, TPM, secure elements).",
        sections: [
          {
            number: "4.1",
            title: "Common vulnerabilities and exposures",
            body: [
              "CVE (Common Vulnerabilities and Exposures) is the naming standard: a CVE ID (CVE-2021-44228 - Log4Shell as the canonical example) uniquely identifies a publicly known vulnerability; CWE classifies the weakness kind (CWE-79 XSS, CWE-89 SQL injection, CWE-120 buffer overflow); CVSS scores severity (0-10 from exploitability metrics - vector, complexity, privileges, interaction - and impact metrics - confidentiality, integrity, availability). The management cycle: identify (scanning, advisories) -> score (CVSS + exploit availability) -> prioritize -> patch -> verify.",
              "A worked prioritization fixes the discipline: two findings - CVSS 9.8 RCE with a public exploit and no auth (patch now, emergency window) vs CVSS 7.5 info-disclosure requiring an adjacent network and no public exploit (scheduled window). The kev rule: CISA's KEV catalog (exploited-in-the-wild list) overrides scores - a KEV-listed CVE is patched regardless of its CVSS. The exam's expected nuance: CVSS measures severity in the abstract; risk = severity x exposure x exploitability - the base score alone never decides the queue.",
              "The vulnerability lifecycle completes the frame: disclosed -> CVE assigned -> advisory + patch -> EPSS/KEV signals -> patch deployment -> verification scan. The security branch's angle: CVEs are also the attack currency - exploit kits index by CVE, so unpatched known-vulnerable hosts are the cheapest targets (Unit III's worms ride exactly this); exposure management (knowing your own CVE inventory continuously) is the defender's mirror.",
              "Exam framing: expect 'explain CVE/CWE/CVSS and the vulnerability management cycle'. Give the Log4Shell example, the worked prioritization with the KEV rule, and the risk-vs-severity distinction. The 'risk = severity x exposure x exploitability' sentence is the differentiator.",
            ],
            keyTerms: [
              { term: "CVE", definition: "Common Vulnerabilities and Exposures - the unique naming of public vulnerabilities." },
              { term: "CWE", definition: "Common Weakness Enumeration - the classification of weakness kinds." },
              { term: "CVSS", definition: "0-10 severity scoring from exploitability and impact metrics." },
              { term: "KEV", definition: "CISA's Known Exploited Vulnerabilities catalog - patch override." },
              { term: "Risk vs severity", definition: "risk = severity x exposure x exploitability - CVSS alone never decides." },
            ],
            table: {
              caption: "CVSS metric groups and what they weigh.",
              headers: ["Group", "Metrics", "Question answered"],
              rows: [
                ["Exploitability", "vector, complexity, privileges, user interaction", "how hard to attack?"],
                ["Impact", "confidentiality, integrity, availability", "how bad if it lands?"],
                ["Scope", "changed / unchanged", "does it cross a boundary?"],
                ["Temporal/Environmental", "exploit maturity, compensations", "context adjustments"],
              ],
            },
            bullets: [
              "CVE names it (CVE-2021-44228); CWE classifies it; CVSS scores it.",
              "Log4Shell: the canonical CVE example - unauthenticated RCE, 9.8.",
              "Cycle: identify -> score -> prioritize -> patch -> verify.",
              "KEV overrides: exploited-in-the-wild patches first regardless of score.",
              "Risk = severity x exposure x exploitability - never the base score alone.",
              "Unpatched known CVEs are the cheapest attacker targets (worm fuel).",
            ],
            diagram: {
              kind: "fork",
              title: "Two findings, one queue order",
              caption: "Severity scores inform; exploit reality decides.",
              start: "Two vulnerabilities reported",
              branches: [
                { label: "CVSS 9.8, public exploit, KEV-listed", outcome: "emergency patch window - actively exploited now", good: true },
                { label: "CVSS 7.5, no exploit, internal-only surface", outcome: "scheduled window - risk-weighted below the 9.8", good: true },
                { label: "CVSS 9.0, theoretical, no exposure", outcome: "documented and watched - exposure is zero", good: true },
                { label: "Patch by score alone", outcome: "wrong - severity is not risk", good: false },
              ],
            },
            callout: {
              type: "exam",
              title: "Severity is not risk",
              body: "The management sentence examiners reward: 'CVSS prices the vulnerability in the abstract; risk adds your exposure and the exploit's maturity - which is why a KEV-listed 7.5 outranks an unexploited 9.0'. Then the Log4Shell example grounds it. Both sentences together are the CVE answer's spine.",
            },
            examQuestions: [
              {
                q: "Explain CVE, CWE and CVSS with examples, the vulnerability-management cycle, and a worked prioritization using the KEV rule and the risk-vs-severity distinction.",
                marks: 14,
                outline: [
                  "CVE: unique IDs (CVE-2021-44228 Log4Shell)",
                  "CWE: weakness classes (79 XSS, 89 SQLi, 120 overflow)",
                  "CVSS: exploitability + impact metrics -> 0-10",
                  "Cycle: identify -> score -> prioritize -> patch -> verify",
                  "KEV catalog overrides scores - exploited now patches first",
                  "Worked: 9.8+public exploit vs 7.5+no exploit vs 9.0+no exposure",
                  "Risk = severity x exposure x exploitability",
                ],
              },
              {
                q: "Why do worms and exploit kits make unpatched CVEs the cheapest targets?",
                marks: 7,
                outline: [
                  "Exploit code already exists and is indexed by CVE",
                  "Scanning finds vulnerable versions trivially",
                  "Defenders' delay is the attacker's window",
                ],
              },
            ],
          },
          {
            number: "4.2",
            title: "Secure system configuration",
            body: [
              "Secure configuration (hardening) is the discipline of removing everything a system does not need and locking what remains: the attack surface shrinks before any attacker acts. The framework: baseline standards (CIS Benchmarks, vendor STIGs) specify per-OS settings - disable unused services, close unneeded ports, enforce password/MFA policy, configure logging (Unit III's audit), restrict sudo/su, mount tmp noexec/nosuid, enable ASLR/DEP and MAC policies.",
              "A worked hardening checklist for a Linux server pins the practice: update and enable unattended security patches; disable root SSH (PermitRootLogin no) and enforce key-based auth; firewall default-deny (nftables/ufw - only 22/443 in); remove or disable unused services (list open sockets as evidence); umask 027, tmp noexec; auditd rules on auth and privilege paths (Unit III); and verify with a CIS audit tool (Lynis/OpenSCAP) - the checklist runs, the scanner confirms, deviations are tickets.",
              "The principles beneath the checklist are the section's payload: least privilege and minimal surface (Saltzer-Schroeder again), secure defaults (fail-safe: the shipped state should be the safe state), configuration drift management (what drifts from baseline gets flagged - otherwise hardening decays within weeks), and the measurement loop (scan -> remediate -> re-scan). The security branch's angle: misconfiguration is the top real-world breach cause (cloud buckets, open databases) - hardening is where those incidents are prevented.",
              "Exam framing: expect 'explain secure system configuration/hardening with a checklist'. Give the CIS/STIG framing, the Linux checklist with one command per item, and the drift/verify loop. The 'misconfiguration is the top breach cause' sentence is the motivating mark.",
            ],
            keyTerms: [
              { term: "CIS Benchmark", definition: "Community-vetted per-OS hardening baselines." },
              { term: "STIG", definition: "Defense Information Systems Agency hardening guides." },
              { term: "Attack surface", definition: "Everything reachable - hardening's shrinking target." },
              { term: "Configuration drift", definition: "Divergence from baseline over time - flagged by continuous audit." },
              { term: "OpenSCAP/Lynis", definition: "Automated baseline-audit scanners verifying hardening." },
            ],
            table: {
              caption: "A Linux hardening checklist - item, command, principle.",
              headers: ["Item", "Concrete action", "Principle"],
              rows: [
                ["Patches", "unattended-upgrades enabled", "close known CVEs (4.1)"],
                ["Remote access", "PermitRootLogin no; key-only SSH", "least privilege"],
                ["Firewall", "default-deny; allow 22/443 only", "minimal surface"],
                ["Services", "disable unused; list sockets as evidence", "economy of mechanism"],
                ["Filesystems", "tmp noexec,nosuid; umask 027", "containment"],
                ["Audit", "auditd on auth/privilege paths", "traceability (3.2)"],
                ["Verify", "Lynis/OpenSCAP vs CIS baseline", "measurement loop"],
              ],
            },
            bullets: [
              "Hardening = remove what is unused, lock what remains - before attackers act.",
              "Baselines: CIS Benchmarks and STIGs - auditable, per-OS.",
              "Checklist: patches, SSH hardening, default-deny firewall, service pruning.",
              "Filesystem flags: tmp noexec/nosuid; umask tightens defaults.",
              "Drift management: scan -> remediate -> re-scan continuously.",
              "Misconfiguration is the top real breach cause - this section is the fix.",
            ],
            diagram: {
              kind: "cycle",
              title: "The hardening maintenance loop",
              caption: "Baseline, verify, remediate - and repeat, or decay wins.",
              steps: [
                { label: "Adopt baseline", note: "CIS/STIG mapped to the platform" },
                { label: "Apply", note: "checklist executed with evidence" },
                { label: "Scan", note: "OpenSCAP/Lynis against the baseline" },
                { label: "Remediate drift", note: "deviations become tickets" },
                { label: "Re-scan", note: "continuous - decay is the enemy" },
              ],
            },
            callout: {
              type: "tip",
              title: "Hardening decays without measurement",
              body: "The operational sentence: 'a hardened system unhardens itself - every new service, quick fix and package adds surface back; the measurement loop (scan, ticket, re-scan) is what keeps the baseline true'. Then the motivating stat: misconfiguration tops real-world breach causes - the checklist is where those incidents are pre-empted.",
            },
            examQuestions: [
              {
                q: "Explain secure system configuration: the baseline framework (CIS/STIG), a worked Linux hardening checklist with concrete actions, and the drift/verification loop.",
                marks: 14,
                outline: [
                  "Purpose: shrink attack surface before attackers act",
                  "CIS Benchmarks / STIGs as auditable baselines",
                  "Checklist: patches, root-SSH off, key auth, default-deny firewall",
                  "Service pruning; tmp noexec/nosuid; umask 027",
                  "auditd on auth/privilege paths (traceability)",
                  "Verify: Lynis/OpenSCAP against the baseline",
                  "Drift loop: scan -> ticket -> re-scan continuously",
                ],
              },
              {
                q: "Why is default-deny the correct firewall posture for a server?",
                marks: 7,
                outline: [
                  "Fail-safe default principle - unknown services stay unreachable",
                  "Allowlisting documents exactly what the server needs",
                  "New services fail closed until explicitly approved",
                ],
              },
            ],
          },
          {
            number: "4.3",
            title: "Virtualization techniques for security",
            body: [
              "Virtualization isolates by construction: a hypervisor multiplexes hardware into VMs whose kernel, drivers and compromises are contained within their boundaries. The security properties: isolation (a VM's crash or compromise does not touch siblings), encapsulation (whole machines as files - snapshot, rollback, forensics-friendly imaging), and hardware-mediated sharing (IOMMU, EPT - the guest touches hardware only through the hypervisor). Containers trade stronger isolation for efficiency (shared kernel, namespaces/cgroups) - the isolation spectrum the syllabus's 'virtualization techniques for security' asks for.",
              "A worked isolation spectrum fixes the comparison: hypervisor VMs (ESXi/KVM/Hyper-V) - separate kernels, hardware-enforced boundaries, escape = hypervisor bug (rare, valuable: the 'VM escape' exploit class); containers (Docker/LXC) - shared kernel, namespaces (PID/net/mount) + cgroups limits - escape = kernel bug (commoner, cheaper); sandboxes/app-isolation (browser tabs, Flatpak) - process-level confinement. Choose by trust gap: hostile code -> VM; internal multi-tenancy -> containers; untrusted pages -> app sandbox.",
              "The security USES complete the section: malware labs (Unit III's dynamic analysis - snapshot-and-rollback makes detonation safe), honeypots (Unit III's pots are VMs by default - revert on compromise), forensics (VM snapshots preserve state for imaging), cross-domain separation (dev/test/prod isolation, blast-radius capping), and microsegmentation (VM/container-level firewalls). The mitigations for the escape class: minimal hypervisor TCB, IOMMU, and patch discipline on the hypervisor itself - the host becomes the new crown jewel.",
              "Exam framing: expect 'explain virtualization for security and the VM/container isolation spectrum'. Give the three properties, the spectrum with escape classes, and the security-use list. The 'choose by trust gap' sentence is the decision mark.",
            ],
            keyTerms: [
              { term: "Hypervisor", definition: "Multiplexes hardware into VMs - the isolation boundary (Type 1 bare-metal, Type 2 hosted)." },
              { term: "VM escape", definition: "Exploit moving from guest to host/hypervisor - the class that breaks the boundary." },
              { term: "Namespaces + cgroups", definition: "Container isolation primitives - views and limits, shared kernel." },
              { term: "Snapshot/rollback", definition: "Encapsulated machine state - detonate and revert safely." },
              { term: "IOMMU", definition: "Hardware mediating device DMA - guests cannot DMA around the hypervisor." },
            ],
            table: {
              caption: "The isolation spectrum - trust gap decides.",
              headers: ["Technology", "Boundary", "Escape class", "Fits"],
              rows: [
                ["Hypervisor VM", "separate kernel + hardware mediation", "hypervisor bugs (rare, valuable)", "hostile code, hard multi-tenancy"],
                ["Container", "namespaces/cgroups, shared kernel", "kernel bugs (commoner)", "internal tenancy, CI"],
                ["App sandbox", "process-level confinement", "logic/kernel bugs", "untrusted content per-process"],
              ],
            },
            bullets: [
              "Properties: isolation, encapsulation (snapshots), hardware-mediated sharing.",
              "VMs: separate kernels - escapes are rare, high-value hypervisor bugs.",
              "Containers: shared kernel - cheaper, weaker; kernel bugs escape.",
              "Security uses: malware labs, honeypots, forensics, blast-radius capping.",
              "Snapshot-and-rollback makes detonation and pot compromise cheap.",
              "Mitigations: minimal hypervisor TCB, IOMMU, hypervisor patching.",
            ],
            diagram: {
              kind: "fork",
              title: "Choose isolation by trust gap",
              caption: "The more hostile the workload, the harder the boundary.",
              start: "What runs inside?",
              branches: [
                { label: "Known-malicious samples", outcome: "hypervisor VM with no network - snapshot/rollback ready", good: true },
                { label: "Internal multi-tenant services", outcome: "containers + cgroup limits + namespaces", good: true },
                { label: "Untrusted web content", outcome: "app sandbox / site isolation per process", good: true },
                { label: "Hostile code on a shared-kernel container", outcome: "wrong - kernel bugs escape; use a VM", good: false },
              ],
            },
            callout: {
              type: "exam",
              title: "The boundary moves the crown jewels",
              body: "The design sentence: 'virtualization does not remove trust - it moves it: the hypervisor becomes the TCB, so hardening (4.2) and patch discipline shift to the host layer'. Then the spectrum (VM > container > sandbox) with escape classes. The moved-trust sentence is what elevates the answer from a technology list to a security argument.",
            },
            examQuestions: [
              {
                q: "Explain virtualization for security: the isolation/encapsulation/mediation properties, the VM-vs-container-vs-sandbox spectrum with escape classes, and the security use cases.",
                marks: 14,
                outline: [
                  "Hypervisor multiplexes hardware into isolated VMs",
                  "Properties: isolation, snapshot encapsulation, IOMMU-mediated sharing",
                  "VM escape = hypervisor-bug class; rare, high-value",
                  "Containers: namespaces + cgroups on a shared kernel - cheaper, weaker",
                  "Spectrums: VM > container > app sandbox by trust gap",
                  "Uses: malware labs (3.4), honeypots (3.7), forensics, blast-radius caps",
                  "Consequence: hypervisor becomes the TCB - harden the host",
                ],
              },
              {
                q: "Why are malware labs built on snapshotting VMs rather than containers?",
                marks: 7,
                outline: [
                  "Hostile code may exploit kernel bugs - shared kernel is fatal",
                  "VMs give hardware-mediated boundaries",
                  "Snapshots make detonation safely repeatable",
                ],
              },
            ],
          },
          {
            number: "4.4",
            title: "Mobile operating systems security",
            body: [
              "Mobile OSes are security-first architectures because the device is personal, always-on and app-dense. The shared design (iOS and Android): app sandboxing (every app its own confined domain), system-partition integrity (read-only, verified boot), permission mediation at the IPC layer (no direct shared memory between apps), signed app distribution (store gatekeeping), and hardware roots (secure boot chain, key storage - the co-processor tie-in to section 4.7). The threat model follows the device: malicious apps, network attacks, physical theft, and lost-device data extraction.",
              "A worked permission flow fixes the model: an app requests camera access -> the OS mediates at the IPC boundary (the camera service checks the caller's identity and grant state) -> user consent recorded -> access granted per-policy (while-in-use, one-time) -> revocable in settings. The design contrast with desktops: mobile grants are per-capability and user-visible (the permission dialog IS the access-control UI), while desktops historically granted by uid with coarse prompts - mobile made least privilege user-facing.",
              "The platform split completes the section: Android (this unit continues in 4.5) - open ecosystem, UID-sandbox per app, SELinux MAC, Google Play Protect scanning; iOS - closed ecosystem, notarized apps, stricter sideload absence, per-app sandbox profiles. Both enforce verified boot (section 3.2's measured chain shrunk to a phone), encrypted storage by default (file-based encryption tied to the lock screen), and hardware-backed key storage. The exam's framing sentence: mobile is where OS security architecture is most visible to users - every permission dialog is the reference monitor with a face.",
              "Exam framing: expect 'explain mobile OS security architecture' with the shared design list and the permission-flow walkthrough, plus the Android/iOS split. The permission-dialog-as-reference-monitor sentence is the conceptual mark.",
            ],
            keyTerms: [
              { term: "App sandbox", definition: "Per-app confined domain - the mobile isolation unit." },
              { term: "Verified boot", definition: "Chain-of-trust from bootloader through OS - tampering fails boot or warns." },
              { term: "Permission mediation", definition: "IPC-layer checks of caller identity vs user grants." },
              { term: "FBE", definition: "File-based encryption tied to lock-screen credentials." },
              { term: "Store gatekeeping", definition: "Signed, reviewed app distribution - provenance control." },
            ],
            table: {
              caption: "Mobile security architecture, platform by platform.",
              headers: ["Mechanism", "Android", "iOS"],
              rows: [
                ["Sandbox", "per-app UID + SELinux MAC", "per-app sandbox profiles (Seatbelt)"],
                ["App distribution", "Play + Play Protect scanning", "App Store notarization only"],
                ["Boot integrity", "verified boot (dm-verity)", "secure boot chain"],
                ["Encryption", "file-based, hardware-backed keys", "file-based, Secure Enclave keys"],
                ["Permissions", "runtime grants, revocable", "runtime grants, per-capability"],
              ],
            },
            bullets: [
              "Shared design: sandboxes, verified boot, IPC permission mediation, signed apps.",
              "Permission flow: request -> IPC check -> consent -> policy-scoped grant.",
              "The permission dialog is the reference monitor with a user face.",
              "Android: UID sandbox + SELinux; iOS: sandbox profiles + notarization.",
              "Both: FBE, hardware key storage, verified boot chains.",
              "Threat model: malicious apps, network, theft, physical extraction.",
            ],
            diagram: {
              kind: "flow",
              title: "A permission grant, mediated",
              caption: "The IPC boundary is where mobile access control lives.",
              steps: [
                { label: "App requests", note: "camera API call" },
                { label: "IPC mediation", note: "OS checks caller identity + grant state" },
                { label: "User consent", note: "the dialog - policy captured" },
                { label: "Scoped grant", note: "while-in-use / one-time policy applied" },
                { label: "Revocable", note: "settings can revoke anytime" },
              ],
            },
            callout: {
              type: "exam",
              title: "The dialog is the reference monitor",
              body: "The conceptual sentence: 'mobile made the reference monitor user-facing - every permission dialog is complete mediation with the user as the policy author, scoped per capability and revocable'. Contrast with desktop uid-based grants, then the Android/iOS split table completes the answer.",
            },
            examQuestions: [
              {
                q: "Explain mobile operating-system security architecture: the shared design mechanisms, a worked permission-mediation flow, and the Android vs iOS platform split.",
                marks: 14,
                outline: [
                  "Shared: app sandboxes, verified boot, IPC mediation, signed apps",
                  "Permission flow: request -> IPC check -> consent -> scoped grant",
                  "Grant policies: while-in-use, one-time; revocable in settings",
                  "Android: UID sandbox + SELinux + Play Protect",
                  "iOS: sandbox profiles + notarized distribution only",
                  "Both: FBE with hardware-backed keys",
                  "Threat model: apps, network, theft, physical extraction",
                ],
              },
              {
                q: "Why is per-capability permission mediation stronger than uid-based desktop grants?",
                marks: 7,
                outline: [
                  "Desktops grant coarse identity-based access",
                  "Mobile grants specific capabilities, user-visible",
                  "Revocation and policy scoping are per-capability",
                ],
              },
            ],
          },
          {
            number: "4.5",
            title: "Systems security in Android",
            body: [
              "Android's security architecture is the syllabus's named deep-dive: the UID sandbox (every app runs as a unique Linux uid - DAC isolation by construction), SELinux MAC on top (type enforcement confining even system daemons), the permission system (install-time legacy, runtime grants since Marshmallow), the app sandbox filesystem (private per-app storage), and the boot chain (bootloader lock -> verified boot with dm-verity -> read-only system partitions).",
              "A worked sandbox walkthrough fixes the model: two apps, com.a and com.b - kernel sees uid 10042 and 10087; com.a cannot read com.b's files (DAC denies the other-uid), cannot signal its processes, and SELinux additionally confines both to untrusted_app type (cannot exec su, cannot read system_data). The privilege-escalation surface is exactly the boundary set: kernel exploits (the uid/SELinux walls), IPC services (binder mediation), and the boot chain - which is why hardening followed each: hardened malloc, SELinux neverallow rules, verified boot rollback protection.",
              "The modern hardening list completes the section: scoped storage (apps cannot roam the filesystem), restricted settings (accessibility/notification-listener abuse curbed), Play Protect's scanning, per-app network policies, and hardware attestation (device state provable remotely - section 4.7's co-processors in action). The security branch's angle: Android is a full MAC deployment at consumer scale - SELinux policy is the reference monitor over 3 billion devices, the largest such deployment in existence.",
              "Exam framing: expect 'explain Android security architecture: UID sandbox, SELinux, permissions, verified boot'. Walk the two-app sandbox contrast, list the boot chain, and close with the modern hardening items. The 'DAC by construction + MAC by policy' pairing sentence is the spine.",
            ],
            keyTerms: [
              { term: "UID sandbox", definition: "Each app a unique Linux uid - DAC isolation by construction." },
              { term: "SELinux MAC", definition: "Type enforcement over apps and daemons - neverallow rules cap privileges." },
              { term: "Binder mediation", definition: "IPC service checks - the inter-app permission boundary." },
              { term: "Verified boot (dm-verity)", definition: "Hash tree over partitions - tampering detected/blocked at boot." },
              { term: "Scoped storage", definition: "Apps confined to their own media directories - filesystem roaming curbed." },
            ],
            table: {
              caption: "Android's layered walls.",
              headers: ["Layer", "Mechanism", "What it stops"],
              rows: [
                ["Identity", "per-app uid (DAC)", "cross-app file/process access"],
                ["Policy", "SELinux type enforcement", "even-root confinement, daemon abuse"],
                ["IPC", "binder permission checks", "unauthorized service calls"],
                ["Storage", "scoped storage + FBE", "roaming reads; stolen-device data"],
                ["Boot", "locked bootloader + dm-verity", "persistent tampering"],
              ],
            },
            bullets: [
              "UID sandbox: one Linux uid per app - DAC isolation by construction.",
              "SELinux MAC: type enforcement over apps and even system daemons.",
              "Runtime permissions since Marshmallow - the 4.4 mediation model.",
              "Verified boot: bootloader lock -> dm-verity -> read-only partitions.",
              "Modern hardening: scoped storage, restricted settings, attestation.",
              "Largest MAC deployment in existence - policy at consumer scale.",
            ],
            diagram: {
              kind: "layers",
              title: "Android's security stack (index 0 = outermost)",
              caption: "Each layer assumes the one above it may fail.",
              layers: [
                { label: "Verified boot", note: "bootloader -> dm-verity - tamper-resistant base" },
                { label: "SELinux MAC", note: "type enforcement over all domains" },
                { label: "UID sandbox (DAC)", note: "per-app identity isolation" },
                { label: "Binder mediation", note: "IPC permission checks" },
                { label: "Scoped storage + FBE", note: "data confinement + at-rest encryption" },
              ],
            },
            callout: {
              type: "exam",
              title: "DAC by construction, MAC by policy",
              body: "The pairing sentence: 'Android isolates by construction (every app its own uid - DAC needs no configuration) and confines by policy (SELinux types even root-level daemons)'. Walk the two-app uid example, then the boot chain - that structure is the complete Android answer and the reason it is the syllabus's named mobile deep-dive.",
            },
            examQuestions: [
              {
                q: "Explain systems security in Android: the UID sandbox with a two-app walkthrough, SELinux MAC, the permission model, verified boot, and modern hardening items.",
                marks: 14,
                outline: [
                  "Per-app uid: DAC isolation by construction (uid 10042 vs 10087)",
                  "Cross-app file/process/signaling denied by DAC",
                  "SELinux: untrusted_app type; neverallow caps even daemons",
                  "Binder mediation: IPC permission checks",
                  "Runtime permission grants (Marshmallow+); scoped storage",
                  "Verified boot: locked bootloader, dm-verity, read-only partitions",
                  "Hardening: restricted settings, attestation, Play Protect",
                ],
              },
              {
                q: "Why does verified boot matter for a device users cannot physically guard?",
                marks: 7,
                outline: [
                  "Physical tampering is the mobile threat model",
                  "Tampered boot chains fail verification or warn",
                  "Persistent malware loses its reinstall anchor",
                ],
              },
            ],
          },
          {
            number: "4.6",
            title: "Application security",
            body: [
              "Application security is the discipline of building software that survives hostile input: the OWASP frame (Top 10 risk classes - injection, broken access control, cryptographic failures, XSS, SSRF...), secure-coding practices (input validation, output encoding, parameterized queries, least-privilege DB accounts), and the process controls (SDLC integration - threat modeling, SAST/DAST/SCA scanning, dependency management). The syllabus's 'application security' is answered by naming the classes, the practices, and the pipeline.",
              "A worked injection pair fixes the core: vulnerable - query = \"SELECT * FROM users WHERE name='\" + input + \"'\"; input ' OR '1'='1 authenticates anyone. Fixed - cursor.execute('SELECT * FROM users WHERE name=%s', (input,)): the driver's parameterization separates code from data, and the injection grammar dies. The XSS twin: never embed user input raw in HTML - escape on output (Unit II's html.escape) or use templating with auto-escaping; CSP headers as the layer behind.",
              "The pipeline completes the discipline: threat model at design (STRIDE over the data flows), SAST (source scanning for the CWE classes - Unit 4.1's vocabulary), DAST (black-box probing of the running app), SCA (dependency CVEs - Log4Shell lived in a library, not the app code), secrets management (no hardcoded credentials), and signed builds/updates (provenance - the trojan defence of Unit III applied to your own supply chain). The exam's sentence: most app breaches are known weakness classes - the discipline is systematic coverage, not cleverness.",
              "Exam framing: expect 'explain application security: OWASP classes, secure coding, and the security pipeline'. Give the injection pair with the parameterization fix, the XSS/escape twin, and the pipeline stages. The 'code vs data separation' sentence is the technical spine.",
            ],
            keyTerms: [
              { term: "OWASP Top 10", definition: "The canonical web risk classes - injection, broken access control, XSS, etc." },
              { term: "Parameterized query", definition: "Driver-separated code and data - the structural injection fix." },
              { term: "Output encoding", definition: "Escape at the rendering boundary - the structural XSS fix." },
              { term: "SAST/DAST/SCA", definition: "Static, dynamic and component analysis in the pipeline." },
              { term: "Threat modeling", definition: "STRIDE over data flows at design time - find classes before code." },
            ],
            table: {
              caption: "Weakness class -> structural fix.",
              headers: ["CWE class", "Attack shape", "Structural fix"],
              rows: [
                ["SQL injection (89)", "input changes query grammar", "parameterized queries"],
                ["XSS (79)", "input executes as script", "output encoding + CSP"],
                ["Broken access control (01)", "direct object references", "server-side authorization checks"],
                ["SSRF (918)", "server fetches attacker URLs", "allowlists on outbound fetch"],
                ["Crypto failures (02)", "weak/homegrown crypto", "vetted libraries, managed keys"],
              ],
            },
            bullets: [
              "OWASP classes name the recurring weaknesses - coverage beats cleverness.",
              "Injection fix: parameterization separates code from data.",
              "XSS fix: output encoding/templating + CSP behind it.",
              "Pipeline: threat model -> SAST/DAST/SCA -> signed builds.",
              "SCA matters: Log4Shell was a dependency, not app code.",
              "Secrets management and signed updates close the supply chain.",
            ],
            diagram: {
              kind: "flow",
              title: "The secure-development pipeline",
              caption: "Every stage catches the class the previous one missed.",
              steps: [
                { label: "Threat model", note: "STRIDE at design time" },
                { label: "Secure coding", note: "validation, parameterization, encoding" },
                { label: "SAST + SCA", note: "source and dependency scanning" },
                { label: "DAST", note: "black-box probing of the running app" },
                { label: "Signed release", note: "provenance and update integrity" },
              ],
            },
            callout: {
              type: "exam",
              title: "Separate code from data",
              body: "The technical spine: 'every injection-class flaw is code and data sharing one parser; the structural fixes all separate them - parameterized SQL, output encoding, template auto-escape'. Show the vulnerable string-concat query, the injection input, and the parameterized fix - three lines that earn the section's marks.",
            },
            examQuestions: [
              {
                q: "Explain application security: OWASP risk classes, a worked SQL-injection pair with the parameterization fix, the XSS/output-encoding twin, and the secure-development pipeline (threat model, SAST/DAST/SCA, signed builds).",
                marks: 14,
                outline: [
                  "OWASP Top 10: injection, access control, crypto failures, XSS",
                  "Vulnerable: string-concatenated SQL; input ' OR '1'='1",
                  "Fix: parameterized query - code/data separated",
                  "XSS: raw embedding -> output encoding + CSP",
                  "Pipeline: threat model -> SAST/SCA -> DAST -> signed release",
                  "SCA: dependency CVEs (Log4Shell) - libraries need scanning too",
                  "Secrets management + provenance close the chain",
                ],
              },
              {
                q: "Why does parameterization defeat injection where input filtering does not?",
                marks: 7,
                outline: [
                  "Filtering chases encodings - bypassable in principle",
                  "Parameterization changes the grammar: input is data, never parsed",
                  "Structural beats enumerable",
                ],
              },
            ],
          },
          {
            number: "4.7",
            title: "Secure wallets and secure co-processors",
            body: [
              "The unit's hardware tier moves secrets off the main CPU: a secure element/secure co-processor is a dedicated chip with its own CPU, storage and crypto - keys are generated and used inside, never exported; the main OS talks to it over an authenticated channel. The family: TPM (PC measured boot/attestation - Unit III), TEE (ARM TrustZone - a secure world alongside the normal world, used by Android's Keymaster/Keymint), Secure Enclave (Apple's key co-processor), SE elements (banking/payment chips), and HSMs (datacenter key custody).",
              "A worked secure-wallet flow pins the model: a mobile payment/wallet app stores its private key in the TEE: generate key inside Keymaster (never in app memory), sign transactions inside the TEE (the app passes a digest in, receives a signature out), hardware-backed attestation certifies the key's residency (non-exportable proof), and biometric binding gates usage. Even a fully rooted OS cannot export the key - the attack surface shrinks from 'compromise the OS' to 'compromise the silicon', which is the entire point.",
              "The design principles complete the section: keys never leave the secure boundary (non-exportability), usage is attested (remote parties verify residency and state), rate limiting/lockout lives in hardware (brute-force priced physically), and the boot chain ties the co-processor to measured OS state (a tampered OS loses key access - verified boot's payoff). The limits to state honestly: side channels (power/timing on the chip), firmware bugs in the TEE itself, and the trust anchor question (who audits the silicon) - hardware raises the bar, not to infinity.",
              "Exam framing: expect 'explain secure wallets/co-processors: TPM/TEE/SE/Enclave roles, a key-usage walkthrough, and the design principles with honest limits'. The 'keys never leave the boundary' sentence is the spine; the side-channel paragraph is the differentiator.",
            ],
            keyTerms: [
              { term: "TPM", definition: "PC trusted platform module - measured boot, attestation, sealed keys." },
              { term: "TEE / TrustZone", definition: "Secure-world execution alongside the OS - Android Keymaster's home." },
              { term: "Secure Enclave / SE", definition: "Dedicated key co-processors (Apple SE, payment SEs)." },
              { term: "Non-exportable key", definition: "Generated and used inside the chip - compromise of OS cannot extract it." },
              { term: "Hardware attestation", definition: "Signed proof of key residency and device state." },
            ],
            table: {
              caption: "The co-processor family and its roles.",
              headers: ["Device", "Home", "Job"],
              rows: [
                ["TPM", "PCs/servers", "measured boot, attestation, sealed storage"],
                ["TEE (TrustZone)", "phones/SoCs", "key ops in secure world (Keymaster)"],
                ["Secure Enclave", "Apple devices", "biometric-gated key custody"],
                ["SE element", "cards/phones", "payment-grade key storage"],
                ["HSM", "datacenters", "bulk key custody, signing appliances"],
              ],
            },
            bullets: [
              "Secrets move off the main CPU into dedicated silicon.",
              "Keys generated and used inside - never exported; OS compromise cannot extract.",
              "TEE: TrustZone secure world; Keymaster signs inside it.",
              "Attestation: remote parties verify key residency and device state.",
              "Rate limiting/lockout in hardware - brute force priced physically.",
              "Honest limits: side channels, TEE firmware bugs, silicon audit.",
            ],
            diagram: {
              kind: "flow",
              title: "A transaction signed inside the TEE",
              caption: "The digest goes in; the signature comes out; the key never does.",
              steps: [
                { label: "Key generation", note: "inside Keymaster/TEE - non-exportable" },
                { label: "Attestation", note: "residency certified to the issuer" },
                { label: "Transaction digest", note: "app sends the hash, not the key" },
                { label: "TEE signs", note: "secure-world computation" },
                { label: "Signature out", note: "verified remotely; key never left" },
              ],
            },
            callout: {
              type: "tip",
              title: "Raise the bar, not to infinity",
              body: "The honest hardware sentence: 'secure co-processors shrink the attack surface from the whole OS to the chip - but side channels (power/timing), TEE firmware bugs and silicon-audit gaps remain; hardware raises the cost of attack, it does not end it'. Pair with the non-exportable-key walkthrough and the answer covers both the promise and the limits examiners probe.",
            },
            examQuestions: [
              {
                q: "Explain secure wallets and secure co-processors: the TPM/TEE/SE/Enclave/HSM family, a worked TEE key-usage walkthrough, the design principles, and the honest limits.",
                marks: 14,
                outline: [
                  "Family: TPM (PC), TEE (phones), Enclave (Apple), SE (payments), HSM (DC)",
                  "Keys generated and used inside - non-exportable",
                  "Walkthrough: generate -> attest -> digest in -> sign -> signature out",
                  "Biometric binding gates usage",
                  "Rooted OS still cannot extract the key",
                  "Principles: non-exportability, attestation, hardware rate limiting",
                  "Limits: side channels, TEE firmware bugs, silicon audit",
                ],
              },
              {
                q: "What does hardware attestation prove to a remote service?",
                marks: 7,
                outline: [
                  "The key genuinely resides in certified hardware",
                  "Device/boot state matches expected measurements",
                  "So the service can trust signatures from that key",
                ],
              },
            ],
          },
        ],
      },
    },
    {
      number: 5,
      roman: "V",
      title: "Windows Operating System Internals and Winsock",
      summary:
        "Unit V is the Windows half: versions and admin tools, system architecture and internals, system worker threads and global flags, local procedure calls, and sockets programming with Winsock - functions, data structures, descriptors, connections, stream and datagram sockets.",
      chapter: {
        number: "05",
        title: "Windows Internals and Winsock",
        intro:
          "Unit V covers Windows versions, concepts and tools, Windows internals and system architecture, system worker threads, Windows global flags, local procedure calls, sockets programming with Winsock - functions, data structures, descriptors, connections, and stream vs datagram sockets.",
        inOneBreath:
          "Windows layers HAL -> kernel -> executive over user processes; SYSTEM worker threads execute kernel work items; gflags tunes allocation/heap debugging; ALPC is the local RPC transport. Winsock mirrors the socket API with WSAStartup, SOCKET handles, sockaddr structures, and overlapped I/O - stream (TCP) and datagram (UDP) sockets both.",
        sections: [
          {
            number: "5.1",
            title: "Windows versions, concepts and tools",
            body: [
              "The Windows lineage the syllabus expects: NT architecture (1993 NT 3.1) unified under Windows 2000/XP, Vista's driver signing and UAC, 7's maturity, 8/10's UWP and Defender, 11's TPM 2.0 requirement and VBS (virtualization-based security) - each version a security milestone as much as a feature list. Server line: NT 4 -> 2003 -> 2008 R2 (Core, PowerShell) -> 2016/2019/2022 (Nano, HCI). The exam's version question is usually 'security-relevant milestones per version'.",
              "A worked tools tour fixes the sysinternals half: Process Explorer (handles, threads, DLLs per process - the malware-hunting microscope), Process Monitor (file/registry/network tracing - the TOCTOU and persistence detector), Autoruns (all persistence locations - the boot-order truth), TCPView (socket ownership), AccessChk (effective permissions - the DAC checker), and WinDbg (kernel debugging - the internals tool of this unit). Each tool answers one internals question; the pairing (tool -> question) is the exam's expected table.",
              "Concepts vocabulary completes the frame: processes/threads/jobs, tokens (security context), handles (object references), services (SCM-managed daemons), the registry (config database), and access control (SIDs, SDDL, SACLs - Unit III's audit tie-in). The version-to-security mapping: UAC (Vista) split tokens, Driver Signing + PatchGuard (Vista/XP x64) protected kernel integrity, VBS/HVCI (10/11) moved the TCB into a hypervisor - Windows' security history is the TCB moving downward.",
              "Exam framing: expect 'Windows versions and security milestones' and 'Sysinternals tools with their questions'. Give the version list with one security item each, the tools table, and the token/handle/SID vocabulary. The TCB-moves-down sentence is the narrative spine.",
            ],
            keyTerms: [
              { term: "Sysinternals", definition: "Microsoft's diagnostic suite - Process Explorer/Monitor, Autoruns, TCPView." },
              { term: "Token", definition: "A process's security context: SIDs, privileges, integrity level." },
              { term: "Handle", definition: "Reference to a kernel object (file, process, section) via the object manager." },
              { term: "VBS/HVCI", definition: "Virtualization-based security - kernel-mode code integrity inside a hypervisor boundary." },
              { term: "SCM", definition: "Service Control Manager - Windows' daemon registry and launcher." },
            ],
            table: {
              caption: "Windows security milestones by version.",
              headers: ["Version", "Milestone", "Security meaning"],
              rows: [
                ["Vista", "UAC, driver signing, PatchGuard", "split tokens; kernel integrity"],
                ["7", "BitLocker maturity, AppLocker", "data + application control"],
                ["8/8.1", "Signed bootloader, Defender default", "boot chain, baseline AV"],
                ["10", "VBS/HVCI, Device Guard, WDAC", "hypervisor-anchored code integrity"],
                ["11", "TPM 2.0 + Secure Boot required", "hardware root of trust by default"],
              ],
            },
            bullets: [
              "NT lineage: 3.1 -> 2000/XP -> Vista (UAC, signing) -> 7 -> 10 (VBS) -> 11 (TPM 2.0).",
              "Process Explorer: handles/threads/DLLs per process - the hunting microscope.",
              "Process Monitor: file/registry/network traces - TOCTOU and persistence finder.",
              "Autoruns: every persistence location in one view.",
              "AccessChk: effective permissions; WinDbg: kernel internals.",
              "Tokens, handles, SIDs, SCM, registry - the concept vocabulary.",
            ],
            diagram: {
              kind: "pyramid",
              title: "Windows security milestones as TCB movement",
              caption: "Each era anchors trust one layer lower.",
              tiers: [
                { label: "TPM 2.0 / Secure Boot (11)", note: "hardware root required" },
                { label: "VBS/HVCI (10)", note: "kernel integrity behind a hypervisor" },
                { label: "Driver signing + PatchGuard (Vista+)", note: "kernel code verified at load/runtime" },
                { label: "UAC split tokens (Vista)", note: "least privilege for users" },
                { label: "Classic NT (1993-)", note: "object manager + ACLs baseline" },
              ],
            },
            callout: {
              type: "tip",
              title: "Security history = TCB moving down",
              body: "The narrative sentence for the versions question: 'Windows security history is the trusted computing base moving downward - from the kernel (NT ACLs) to signed kernel code (Vista) to a hypervisor boundary (VBS) to silicon (TPM 2.0)'. Attach one Sysinternals tool per internals question and the section is complete.",
            },
            examQuestions: [
              {
                q: "Survey Windows versions with their security-relevant milestones, and map the Sysinternals tools to the internals questions they answer.",
                marks: 14,
                outline: [
                  "NT 3.1: object manager + ACL baseline",
                  "Vista: UAC split tokens, driver signing, PatchGuard",
                  "7: BitLocker, AppLocker",
                  "10: VBS/HVCI - hypervisor-anchored code integrity",
                  "11: TPM 2.0 + Secure Boot mandatory",
                  "Tools: ProcExp (handles), ProcMon (traces), Autoruns (persistence)",
                  "AccessChk (permissions), WinDbg (kernel debugging)",
                ],
              },
              {
                q: "Which Sysinternals tool finds malware persistence, and why?",
                marks: 7,
                outline: [
                  "Autoruns enumerates every auto-start location",
                  "Run keys, services, tasks, DLL hijacks in one view",
                  "Unsigned/unexpected entries surface immediately",
                ],
              },
            ],
          },
          {
            number: "5.2",
            title: "Windows internals and system architecture",
            body: [
              "Windows' architecture layers: HAL (hardware abstraction - board-specific), kernel (scheduling, interrupts, low-level sync), executive (the OS services: process manager, VM manager, I/O manager, object manager, security reference monitor, cache manager), and user mode (system processes, services, applications, plus environment subsystems). The object manager is the unifying design: everything - files, processes, sections, events - is an object with a header (type, quotas, names) and security descriptor, accessed through handles.",
              "A worked syscall path fixes the flow: CreateFile in user code -> ntdll stub -> syscall trap (KiSystemCall) -> I/O manager builds the IRP -> driver stack (FSD) executes -> object manager/security checks (SRM validates the token's SIDs against the file's SD) -> handle returned. The SRM (Security Reference Monitor) is Windows' reference monitor (Unit III's triad implemented): every object access passes it, SDDL-encoded descriptors define rights, and tokens carry SIDs/privileges/integrity levels.",
              "The internals vocabulary completes the section: processes (EPROCESS/KPROCESS), threads (ETHREAD), tokens, handles tables, IRQL levels (interrupt priority - the spinlock context of Unit II), and the registry as configuration. The exam's structural question - 'explain the Windows system architecture' - wants the layer list, the object-manager unification, and the SRM's role; the security branch's angle: SRM + tokens + integrity levels are DAC+MAC hybrid on a consumer OS - the Unit III model deployed commercially.",
              "Exam framing: expect 'explain the Windows system architecture' and 'the object manager and SRM'. Give the layer stack, the CreateFile walkthrough, and the object/token/SID vocabulary. The 'everything is an object' sentence is the architecture's spine.",
            ],
            keyTerms: [
              { term: "Executive", definition: "Windows' OS-services layer: process, VM, I/O, object managers, SRM." },
              { term: "Object manager", definition: "Unifies all kernel resources as objects with headers and security descriptors." },
              { term: "SRM", definition: "Security Reference Monitor - validates every access against tokens and descriptors." },
              { term: "Token", definition: "Per-process security context: SIDs, privileges, integrity level." },
              { term: "IRQL", definition: "Interrupt request level - priority tiers governing what may run/sleep." },
            ],
            table: {
              caption: "The Windows architecture stack.",
              headers: ["Layer", "Components", "Role"],
              rows: [
                ["User mode", "processes, services, subsystems", "applications + environment"],
                ["Executive", "process/VM/I/O/object managers, SRM, cache", "OS services"],
                ["Kernel", "scheduling, interrupts, sync", "low-level mechanisms"],
                ["HAL", "board-specific code", "hardware abstraction"],
                ["Drivers", "kernel-mode extensions", "device logic (IRP processors)"],
              ],
            },
            bullets: [
              "Layers: HAL -> kernel -> executive -> user mode.",
              "Object manager: files/processes/events are all objects with SDs.",
              "SRM validates every access: token SIDs vs object security descriptor.",
              "CreateFile walkthrough: stub -> trap -> IRP -> driver -> handle.",
              "Tokens carry SIDs, privileges, integrity levels - DAC+MAC hybrid.",
              "IRQL tiers govern lock choice (Unit II's spin-vs-mutex rule).",
            ],
            diagram: {
              kind: "layers",
              title: "Windows system architecture",
              caption: "Index 0 at the top: user processes descend to silicon.",
              layers: [
                { label: "User processes/services", note: "applications, SCM services" },
                { label: "Executive", note: "object manager, SRM, VM, I/O, cache" },
                { label: "Kernel", note: "threads, scheduling, IRQL dispatch" },
                { label: "HAL + drivers", note: "hardware abstraction, device stacks" },
              ],
            },
            callout: {
              type: "exam",
              title: "Everything is an object",
              body: "The architecture sentence: 'the object manager makes every kernel resource - file, process, section, event - an object with a security descriptor, and the SRM mediates every handle-based access; that is Windows' reference-monitor triad in production'. Walk CreateFile through the layers; the examiner grades the object/SRM pairing.",
            },
            examQuestions: [
              {
                q: "Explain the Windows system architecture: the layer stack, the object manager's unification, the SRM's role, and a CreateFile syscall walkthrough.",
                marks: 14,
                outline: [
                  "Layers: HAL -> kernel -> executive -> user mode",
                  "Object manager: unified objects with headers + security descriptors",
                  "SRM: token SIDs vs object SD on every access",
                  "Executive managers: process, VM, I/O, cache",
                  "CreateFile: stub -> trap -> IRP -> driver -> handle",
                  "Tokens: SIDs, privileges, integrity levels",
                  "IRQL tiers drive lock/scheduling mechanics",
                ],
              },
              {
                q: "How does the SRM implement the reference-monitor triad?",
                marks: 7,
                outline: [
                  "Complete mediation: every object access passes it",
                  "Tamper-proof: kernel-mode, descriptor integrity protected",
                  "Verifiable: small, audited code path",
                ],
              },
            ],
          },
          {
            number: "5.3",
            title: "System worker threads and Windows global flags",
            body: [
              "System worker threads are the kernel's deferred-work pool: drivers and the executive queue work items (IoQueueWorkItem/ExQueueWorkItem), and worker threads (System process, threads named WorkerThread) execute them at PASSIVE_LEVEL - the sanctioned way to do sleepable work from contexts that cannot sleep (ISR/DPC). The design mirrors Unit II's spin-vs-mutex rule: defer everything slow out of interrupt context into the worker pool.",
              "A worked deferral flow fixes the pattern: an interrupt fires (DIRQL) -> the ISR does minimal work and queues a DPC -> the DPC (still DISPATCH_LEVEL, no paging/sleeping) queues a work item -> a system worker thread processes it at PASSIVE_LEVEL (can page, can block, can allocate). The three-tier deferral is Windows' concurrency shape; the exam's question 'explain system worker threads' wants exactly this tiered path plus the pool's role in the executive (cache manager's lazy writer, VM manager's balance set manager run as workers or dedicated threads).",
              "Global flags (gflags) are the kernel's tuning/debug switches: the gflags.exe tool sets kernel flags (page-heap for pool-overrun detection, special pool for specific drivers, object-reference tracing, loader-snaps for DLL issues) - the memory-corruption hunting kit. Page heap places allocations at page ends so overruns fault immediately (vs silent heap corruption); special pool quarantees a suspect driver's allocations. The security branch's angle: these are the tools that catch the driver-level memory bugs (Unit III's overflow class) at development and triage time.",
              "Exam framing: expect 'explain system worker threads' and 'global flags'. Give the ISR -> DPC -> work-item tiered deferral, named worker-thread consumers, and the gflags page-heap/special-pool purposes. The 'defer slow work out of interrupt context' sentence is the design spine.",
            ],
            keyTerms: [
              { term: "System worker threads", definition: "Kernel threads executing queued work items at PASSIVE_LEVEL." },
              { term: "Work item", definition: "Deferred task queued from ISR/DPC contexts to the worker pool." },
              { term: "ISR -> DPC -> work item", definition: "The three-tier deferral from interrupt to sleepable context." },
              { term: "gflags", definition: "Global flags utility - kernel tuning and heap/pool debugging switches." },
              { term: "Page heap / special pool", definition: "Allocation layouts that fault immediately on overrun - corruption detectors." },
            ],
            table: {
              caption: "The deferral tiers and what each may do.",
              headers: ["Tier", "IRQL", "May sleep/page?"],
              rows: [
                ["ISR", "DIRQL", "no - minimal work only"],
                ["DPC", "DISPATCH_LEVEL", "no paging/sleep; queue work"],
                ["Worker thread", "PASSIVE_LEVEL", "yes - full kernel services"],
                ["User thread", "USER (below)", "yes - via syscalls"],
              ],
            },
            bullets: [
              "Worker threads: the kernel's sleepable deferred-work pool.",
              "Deferral: ISR -> DPC -> work item -> PASSIVE_LEVEL execution.",
              "Executive consumers: lazy writer, balance set manager as workers/dedicated threads.",
              "gflags: page heap, special pool, object-reference tracing.",
              "Page heap faults immediately on overruns - corruption caught at the write.",
              "Security angle: driver memory bugs (overflow class) hunted with gflags.",
            ],
            diagram: {
              kind: "flow",
              title: "Interrupt to worker: the deferral chain",
              caption: "Three tiers from DIRQL to PASSIVE_LEVEL.",
              steps: [
                { label: "ISR fires", note: "DIRQL - acknowledge device only" },
                { label: "Queue DPC", note: "deferred to DISPATCH_LEVEL" },
                { label: "DPC queues work item", note: "still no sleeping" },
                { label: "Worker thread runs", note: "PASSIVE_LEVEL - full services" },
                { label: "Completion", note: "event/IRP signalled back" },
              ],
            },
            callout: {
              type: "exam",
              title: "Defer until you may sleep",
              body: "The design sentence: 'interrupt context may never sleep - so Windows defers work down the tier ladder (ISR -> DPC -> worker thread) until it reaches PASSIVE_LEVEL where allocation and blocking are legal'. Then gflags as the corruption-hunting counterpart. The tiered sentence is the answer's spine; the page-heap purpose is the tooling mark.",
            },
            examQuestions: [
              {
                q: "Explain system worker threads: their role, the ISR -> DPC -> work-item deferral chain with IRQL constraints, and named executive consumers. Explain global flags and page heap/special pool.",
                marks: 14,
                outline: [
                  "Worker threads execute queued items at PASSIVE_LEVEL",
                  "ISR: DIRQL, minimal; DPC: DISPATCH_LEVEL, no sleep",
                  "Work item: the sanctioned bridge to sleepable context",
                  "Executive consumers: lazy writer, balance set manager",
                  "gflags: kernel tuning + heap debugging switches",
                  "Page heap: allocations at page ends - overruns fault instantly",
                  "Special pool: quarantines suspect drivers' allocations",
                ],
              },
              {
                q: "Why must the ISR itself stay minimal?",
                marks: 7,
                outline: [
                  "It runs at DIRQL masking lower-priority interrupts",
                  "Long ISRs stall the system's interrupt responsiveness",
                  "Everything deferrable belongs in DPC/work items",
                ],
              },
            ],
          },
          {
            number: "5.4",
            title: "Local procedure calls",
            body: [
              "ALPC (Advanced Local Procedure Call) is Windows' kernel-mediated IPC for same-machine clients and servers - the transport beneath RPC's local case, used by services, COM, and the user/system boundary (LSASS, RPCSS). The model: client and server hold ALPC port handles; the client sends a message (short messages in the port's buffer; large data via section objects - shared memory sections, Unit II's shm in Windows dress); the kernel queues it to the server port; replies flow back through the same port.",
              "A worked ALPC flow fixes the mechanics: client connects to a well-known port name (\\RPC Control\\...) via NtAlpcConnectPort; server accepts (NtAlpcSendWaitReceivePort loop); a request crosses with message attributes (security context, PID/subject); large payloads attach a section view shared between the parties; the server processes and replies. The security layer: ALPC ports carry SID/audit attributes, and the server validates the caller's token before acting - the IPC version of Unit III's access control.",
              "The exam's positioning question - 'ALPC vs sockets vs shared memory' - resolves by scope: ALPC for local, privileged service traffic (kernel-mediated, authenticated, section-based bulk); sockets for network or same-host streams (no built-in security attributes); raw shared memory for hot data between cooperative parties. ALPC's historical note: the legacy 'LPC' name persists in older literature; modern Windows uses ALPC - a one-line exam clarification.",
              "Exam framing: expect 'explain local procedure calls' with the port model, the section-object bulk transfer, and the security attributes; position ALPC against sockets/shm. The 'validated caller token at the port' sentence is the security mark.",
            ],
            keyTerms: [
              { term: "ALPC", definition: "Kernel-mediated local IPC - port handles, messages, section-based bulk data." },
              { term: "ALPC port", definition: "The communication endpoint object (server's well-known, client's per-connection)." },
              { term: "Section object", definition: "Shared memory section attached to both parties for large payloads." },
              { term: "Message attributes", definition: "Security context, PID, audit info carried with each message." },
              { term: "RPC transport", definition: "ALPC is the local transport beneath Windows RPC." },
            ],
            table: {
              caption: "Local IPC choices on Windows.",
              headers: ["Mechanism", "Best for", "Built-in security"],
              rows: [
                ["ALPC", "service traffic, COM, system boundary", "port attributes + token validation"],
                ["Named pipes", "streams, cross-language clients", "SDDL on the pipe"],
                ["Sockets (localhost)", "network-style APIs on one host", "none intrinsic"],
                ["Shared memory/sections", "hot bulk data", "none - raw trust"],
              ],
            },
            bullets: [
              "ALPC: kernel-queued messages between port handles - local RPC's transport.",
              "Short data in port buffers; bulk via section objects (shared memory).",
              "Attributes carry caller identity - servers validate tokens.",
              "Users: services, COM, LSASS/RPCSS system boundary traffic.",
              "Positioning: ALPC (authenticated local) vs sockets (network) vs raw shm (fast, raw).",
              "Legacy name 'LPC' in older literature; ALPC is the modern form.",
            ],
            diagram: {
              kind: "flow",
              title: "One ALPC exchange",
              caption: "Connect, send, process, reply - with the token validated mid-path.",
              steps: [
                { label: "Connect", note: "client -> server's well-known port" },
                { label: "Accept", note: "server creates the communication pair" },
                { label: "Send", note: "message + attributes; section attached if large" },
                { label: "Validate", note: "server checks caller's token/SID" },
                { label: "Reply", note: "response crosses the same port" },
              ],
            },
            callout: {
              type: "exam",
              title: "The port validates the caller",
              body: "The security sentence: 'ALPC messages carry the caller's security attributes, and privileged servers validate the token at the port before acting - the IPC seam is an access-control seam'. Then the section-object detail for bulk data. Both sentences answer the 'why ALPC for services' question examiners set.",
            },
            examQuestions: [
              {
                q: "Explain local procedure calls: the port model, message flow, section-object bulk transfer, security attributes, and ALPC's positioning against sockets and shared memory.",
                marks: 14,
                outline: [
                  "ALPC ports: server's well-known + client connection ports",
                  "Flow: connect -> accept -> send/attributes -> validate -> reply",
                  "Bulk data via section objects - shared views, not copies",
                  "Attributes: PID, security context, audit info",
                  "Servers validate caller tokens before acting",
                  "Used by services, COM, LSASS/RPCSS boundary",
                  "vs sockets (network) and raw shm (fast, unauthenticated)",
                ],
              },
              {
                q: "Why does ALPC suit the user/system boundary where raw shared memory does not?",
                marks: 7,
                outline: [
                  "Boundary traffic needs caller authentication",
                  "ALPC carries and validates security attributes",
                  "Raw shm offers no identity or integrity guarantees",
                ],
              },
            ],
          },
          {
            number: "5.5",
            title: "Sockets programming with Winsock",
            body: [
              "Winsock is Windows' socket API: Winsock-initialized per process (WSAStartup with WSAData version negotiation), SOCKET handles (unsigned descriptors), and the familiar sequence - socket() creates, bind() names, listen()/accept() for servers, connect() for clients, send()/recv() for streams, sendto()/recvfrom() for datagrams - with cleanup via closesocket() and WSACleanup(). The syllabus's 'functions, data structures, descriptors' is this inventory.",
              "A worked TCP echo pair fixes the pattern: server - WSAStartup; socket(AF_INET, SOCK_STREAM, IPPROTO_TCP); bind to sockaddr_in { AF_INET, htons(5000), INADDR_ANY }; listen(5); SOCKET client = accept(...); recv/send loop; closesocket. Client - WSAStartup; socket; connect to the same sockaddr_in; send/recv. The Windows-specific notes: every socket call needs the WSAStartup preamble; error codes come from WSAGetLastError() (WSAEWOULDBLOCK for non-blocking); and the sockaddr_in struct (family, port in network order, address) is the syllabus's named data structure.",
              "The Winsock-2 extensions complete the section: overlapped I/O (WSARecv with OVERLAPPED + completion callbacks or ports), event selection (WSAEventSelect/WSAAsyncSelect - the message-based event model for GUI apps), and I/O completion ports (IOCP - the scalable server model, Windows' epoll analogue from Unit 5.2). The security branch's angle: socket ownership and FD leaks are the Windows equivalents of the pipe-discipline bugs (Unit I) - closesocket hygiene and WSAStartup/cleanup pairing are the operational rules.",
              "Exam framing: expect 'write a Winsock TCP echo pair' and 'list the Winsock functions and structures'. Write both programs with WSAStartup/WSACleanup bookends; name sockaddr_in, WSAData, SOCKET; preview overlapped I/O/IOCP. The WSAStartup-preamble sentence is the Windows mark.",
            ],
            keyTerms: [
              { term: "WSAStartup/WSACleanup", definition: "Winsock initialization and teardown - required bookends per process." },
              { term: "SOCKET", definition: "Windows' socket descriptor type - unsigned handle into the provider." },
              { term: "sockaddr_in", definition: "Address structure: family, port (network order), IPv4 address." },
              { term: "WSAGetLastError", definition: "Winsock's error retrieval - WSAEWOULDBLOCK for non-blocking readiness." },
              { term: "IOCP", definition: "I/O completion ports - Windows' scalable completion-based server model." },
            ],
            codeExample: {
              language: "c",
              caption: "winsock_echo.c - the canonical TCP pair (server side)",
              code: `#include <winsock2.h>
#include <ws2tcpip.h>
#include <stdio.h>

int main(void) {
    WSADATA wsa;
    WSAStartup(MAKEWORD(2, 2), &wsa);       /* required preamble */

    SOCKET srv = socket(AF_INET, SOCK_STREAM, IPPROTO_TCP);
    struct sockaddr_in addr = {0};
    addr.sin_family = AF_INET;
    addr.sin_port = htons(5000);            /* network order */
    addr.sin_addr.s_addr = INADDR_ANY;

    bind(srv, (struct sockaddr *)&addr, sizeof(addr));
    listen(srv, 5);

    SOCKET cli = accept(srv, NULL, NULL);
    char buf[1024];
    int n;
    while ((n = recv(cli, buf, sizeof(buf), 0)) > 0)
        send(cli, buf, n, 0);               /* echo */

    closesocket(cli);
    closesocket(srv);
    WSACleanup();
    return 0;
}`,
            },
            bullets: [
              "Bookends: WSAStartup before any socket call; WSACleanup at exit.",
              "socket/bind/listen/accept/connect - the same choreography as POSIX.",
              "send/recv for streams; sendto/recvfrom for datagrams.",
              "sockaddr_in: family, htons port, INADDR_ANY or specific address.",
              "Errors via WSAGetLastError - WSAEWOULDBLOCK signals non-blocking readiness.",
              "Winsock 2: overlapped I/O, WSAEventSelect, IOCP - the scalable tier.",
            ],
            diagram: {
              kind: "flow",
              title: "A Winsock TCP connection, end to end",
              caption: "Init, create, bind, listen, accept, echo, cleanup.",
              steps: [
                { label: "WSAStartup", note: "negotiate the Winsock version" },
                { label: "socket()", note: "SOCKET handle created" },
                { label: "bind + listen", note: "sockaddr_in names it; queue set" },
                { label: "accept()", note: "per-client SOCKET" },
                { label: "recv/send + closesocket", note: "then WSACleanup" },
              ],
            },
            callout: {
              type: "exam",
              title: "The preamble is not optional",
              body: "The Windows-specific trap: calling socket() without a successful WSAStartup returns WSANOTINITIALISED - every Winsock program begins with the version handshake (MAKEWORD(2,2)) and ends with WSACleanup. State the bookend rule in every Winsock answer; examiners check it first.",
            },
            examQuestions: [
              {
                q: "Write a Winsock TCP echo server and explain the Winsock programming model: WSAStartup bookends, the core functions, key data structures (SOCKET, sockaddr_in, WSAData), and error handling.",
                marks: 14,
                outline: [
                  "WSAStartup(MAKEWORD(2,2)) before any call; WSACleanup at end",
                  "socket(AF_INET, SOCK_STREAM, IPPROTO_TCP)",
                  "sockaddr_in: family, htons port, INADDR_ANY",
                  "bind -> listen -> accept -> recv/send loop -> closesocket",
                  "Errors: WSAGetLastError (WSAEWOULDBLOCK non-blocking)",
                  "Client side: socket + connect + send/recv",
                  "Winsock 2 tier: overlapped I/O, WSAEventSelect, IOCP",
                ],
              },
              {
                q: "What does IOCP add over a thread-per-connection Winsock server?",
                marks: 7,
                outline: [
                  "Completion-based model: threads service finished I/O, not parked reads",
                  "Scales to thousands of sockets with few threads",
                  "Windows' analogue of epoll event loops",
                ],
              },
            ],
          },
          {
            number: "5.6",
            title: "Winsock functions, data structures and descriptors",
            body: [
              "The syllabus's inventory question - 'Winsock functions, data structures, descriptors' - is answered by three organized lists. Functions by phase: initialization (WSAStartup, WSACleanup), creation/binding (socket, bind, closesocket), connection (listen, accept, connect, shutdown), data (send, recv, sendto, recvfrom, WSASend/WSARecv for overlapped), events/options (WSAEventSelect, WSAAsyncSelect, setsockopt, ioctlsocket), and conversion (htons/ntohs, inet_addr/inet_ntop).",
              "The data-structure list: WSAData (version/negotiation record filled by WSAStartup), sockaddr/sockaddr_in (generic and IPv4-specific address forms - cast pair), hostent/servent (resolver results from gethostbyname/getaddrinfo), fd_set + timeval (the select model's sets and timeout), WSABUF (buffer descriptor for overlapped calls), OVERLAPPED (completion bookkeeping), and WSANETWORKEVENTS (event bitmask results). Descriptors: SOCKET is the opaque unsigned handle - valid only within its process and provider lifetime; per-process descriptor tables differ from fd semantics only in type and cleanup calls.",
              "A worked select-based server fixes the classic multiplexing tier: fd_set readfds; FD_ZERO/FD_SET(server, clients); select(0, &readfds, NULL, NULL, &tv); FD_ISSET branches - accept new clients or service ready ones. The modern tier (IOCP/overlapped) was previewed in 5.5; the exam's expected contrast is select (portable, FD_SETSIZE-limited) vs IOCP (completion, scalable). The security note: setsockopt(SO_REUSEADDR) discipline and descriptor-leak checks (closesocket on every path) are the operational hygiene.",
              "Exam framing: expect 'list Winsock functions by phase and data structures with roles' and 'a select-based Winsock server'. Organize the answer as three lists plus one worked select loop; the sockaddr/sockaddr_in cast-pair explanation is the structure mark.",
            ],
            keyTerms: [
              { term: "WSAData", definition: "Version-negotiation record filled by WSAStartup." },
              { term: "sockaddr / sockaddr_in", definition: "Generic/IPv4 address structures - the cast pair of Winsock." },
              { term: "fd_set / timeval", definition: "select's ready-sets and timeout - the multiplexing tier." },
              { term: "WSABUF + OVERLAPPED", definition: "Buffer descriptor and completion bookkeeping for overlapped I/O." },
              { term: "SOCKET descriptor", definition: "Opaque unsigned handle - per-process, closed via closesocket." },
            ],
            table: {
              caption: "Winsock functions by phase.",
              headers: ["Phase", "Functions", "Role"],
              rows: [
                ["Init/cleanup", "WSAStartup, WSACleanup", "provider negotiation"],
                ["Create/bind", "socket, bind, closesocket", "handle lifecycle"],
                ["Connect", "listen, accept, connect, shutdown", "stream session setup"],
                ["Data", "send/recv, sendto/recvfrom, WSASend/WSARecv", "stream vs datagram vs overlapped"],
                ["Events/options", "WSAEventSelect, select, setsockopt", "multiplexing and tuning"],
                ["Conversion", "htons/ntohs, inet_ntop", "byte order and formatting"],
              ],
            },
            bullets: [
              "Functions organize by phase: init, create, connect, data, events, conversion.",
              "Structures: WSAData, sockaddr pair, hostent, fd_set, WSABUF, OVERLAPPED.",
              "SOCKET: opaque per-process handle; closesocket is the only clean release.",
              "select tier: fd_set + timeval + FD_ISSET - portable multiplexing.",
              "Overlapped tier: WSABUF + OVERLAPPED + completion ports.",
              "Hygiene: SO_REUSEADDR discipline; closesocket on every path.",
            ],
            diagram: {
              kind: "pipeline",
              title: "A select-based Winsock server's tick",
              caption: "Prepare sets, select, branch, service - the classic tier.",
              stages: [
                { label: "FD_ZERO/FD_SET", note: "server + client sockets into readfds" },
                { label: "select(0, ...)", note: "block until ready or timeout" },
                { label: "FD_ISSET(server)", note: "accept new connections" },
                { label: "FD_ISSET(client)", note: "recv/send the ready socket" },
                { label: "Cleanup", note: "FD_CLR closed sockets; loop" },
              ],
            },
            callout: {
              type: "tip",
              title: "Three lists win the inventory question",
              body: "The organization trick: answer 'functions, structures, descriptors' as exactly three lists - functions by phase, structures with one-line roles, descriptors with the handle rules (per-process, closesocket-only). Then one select loop as the worked evidence. The three-list shape is what examiners can grade fast; unstructured enumerations score half.",
            },
            examQuestions: [
              {
                q: "Inventory Winsock: functions organized by phase, the principal data structures (WSAData, sockaddr_in, fd_set, WSABUF, OVERLAPPED) with roles, and SOCKET descriptor semantics. Include a select-based server outline.",
                marks: 14,
                outline: [
                  "Phases: init, create/bind, connect, data, events, conversion",
                  "WSAData: version negotiation record",
                  "sockaddr/sockaddr_in: the cast-pair address forms",
                  "fd_set + timeval: select's sets and timeout",
                  "WSABUF + OVERLAPPED: the overlapped-I/O pair",
                  "SOCKET: opaque per-process handle; closesocket-only release",
                  "select loop: FD_ZERO/FD_SET -> select -> FD_ISSET branches",
                ],
              },
              {
                q: "Why must ports be stored in network byte order (htons) in sockaddr_in?",
                marks: 7,
                outline: [
                  "The wire format is big-endian by protocol convention",
                  "Host byte order varies (little-endian on x86)",
                  "htons/ntohs convert at the boundary",
                ],
              },
            ],
          },
          {
            number: "5.7",
            title: "Connections, stream and datagram sockets",
            body: [
              "The syllabus's closing contrast is Winsock's two socket modes. Stream sockets (SOCK_STREAM/TCP): connected sessions - connect/accept establish state, bytes arrive ordered and reliable, framing is the app's job; shutdown() half-closes for graceful EOF. Datagram sockets (SOCK_DGRAM/UDP): connectionless - sendto/recvfrom per datagram, boundaries preserved, delivery best-effort; 'connected' UDP (connect() on a datagram socket) merely fixes the peer so send()/recv() work - a convenience, not a session.",
              "A worked pair contrast fixes the code shapes: TCP server - bind/listen/accept loop with per-client SOCKETs and a recv(0) EOF convention; UDP server - one bound SOCKET, recvfrom returns (data, peer), reply via sendto(peer). The eventing difference: WSAEventSelect for stream servers tracks FD_ACCEPT/FD_READ/FD_CLOSE; datagram servers track FD_READ only (no connection events - absence of packets is indistinguishable from silence, the UDP timeout lesson Unit I made).",
              "The Windows-specific completion note closes the unit: IOCP handles both modes - overlapped WSARecv/WSASendTo with per-connection or per-session state, the scalable tier for servers that outgrow select. The security branch's angle mirrors Unit I: stream hygiene (framing, half-close discipline, descriptor cleanup) and datagram hygiene (timeouts, spoof-source awareness - UDP's forgeable source address is the amplification base of Unit III's DRDoS).",
              "Exam framing: expect 'compare stream and datagram sockets on Windows with code shapes' and 'connection semantics on UDP'. Give the two server shapes, the eventing difference, the connected-UDP note, and the hygiene pair. The spoof-source sentence ties the unit to the syllabus's security spine.",
            ],
            keyTerms: [
              { term: "Stream socket (SOCK_STREAM)", definition: "TCP sessions - ordered reliable bytes, accept/shutdown lifecycle." },
              { term: "Datagram socket (SOCK_DGRAM)", definition: "UDP - connectionless, per-datagram boundaries, best-effort." },
              { term: "Connected UDP", definition: "connect() fixing a datagram peer - send/recv convenience, not a session." },
              { term: "FD_ACCEPT/FD_READ/FD_CLOSE", definition: "Stream eventing vs datagram's FD_READ-only." },
              { term: "Spoofable source", definition: "UDP's forgeable address field - reflection/amplification's base." },
            ],
            table: {
              caption: "Stream vs datagram on Winsock.",
              headers: ["Property", "SOCK_STREAM (TCP)", "SOCK_DGRAM (UDP)"],
              rows: [
                ["Session", "connect/accept; shutdown half-close", "none - connected UDP is convenience only"],
                ["Delivery", "ordered, reliable, retransmitted", "best-effort; drops/reorders"],
                ["Boundaries", "stream - frame manually", "datagram preserved"],
                ["Sockets", "listening + one per client", "one socket serves all"],
                ["Events", "FD_ACCEPT/FD_READ/FD_CLOSE", "FD_READ only"],
                ["Security note", "session state to protect", "spoofable source - amplification base"],
              ],
            },
            bullets: [
              "Stream: sessions with accept/shutdown; EOF via recv == 0.",
              "Datagram: one socket, recvfrom's peer address drives replies.",
              "Connected UDP: fixed peer for send/recv convenience - not a session.",
              "Eventing: stream gets FD_CLOSE; datagram sees only FD_READ.",
              "IOCP scales both modes with overlapped sends/recvs.",
              "Hygiene: framing + cleanup for TCP; timeouts + spoof-awareness for UDP.",
            ],
            diagram: {
              kind: "compare",
              title: "Two Winsock server shapes",
              caption: "The session model decides the loop's structure.",
              left: {
                heading: "TCP server",
                items: [
                  "socket -> bind -> listen -> accept",
                  "per-client SOCKET + state",
                  "recv/send loop; 0 = EOF",
                  "shutdown() for graceful half-close",
                ],
              },
              right: {
                heading: "UDP server",
                items: [
                  "socket -> bind only",
                  "one socket, no per-client handles",
                  "recvfrom(data, peer) -> sendto(peer)",
                  "timeouts - silence is not EOF",
                ],
              },
            },
            callout: {
              type: "warning",
              title: "UDP silence is not EOF",
              body: "The closing trap that unites the unit with Unit I: datagram sockets have no close signal - a recvfrom with no timeout blocks forever when peers go silent or packets drop. The fixes (SO_RCVTIMEO/WSARecv timeouts, app-level acks) are the datagram hygiene; the spoofable-source note connects to Unit III's amplification attacks. Both belong in the final contrast answer.",
            },
            examQuestions: [
              {
                q: "Compare stream and datagram sockets in Winsock: session semantics, code shapes for both servers, eventing differences, connected UDP, and the security hygiene each demands.",
                marks: 14,
                outline: [
                  "TCP: connect/accept sessions; per-client SOCKETs; recv 0 = EOF",
                  "shutdown(): graceful half-close semantics",
                  "UDP: bind-only; recvfrom(data, peer) -> sendto(peer)",
                  "Connected UDP: fixed peer convenience, not a session",
                  "Events: FD_ACCEPT/FD_READ/FD_CLOSE vs FD_READ-only",
                  "IOCP scales both via overlapped I/O",
                  "Hygiene: framing/cleanup vs timeouts/spoof-awareness",
                ],
              },
              {
                q: "What exactly does connect() accomplish on a UDP socket?",
                marks: 7,
                outline: [
                  "Fixes the default peer address",
                  "send/recv usable instead of sendto/recvfrom",
                  "Errors from that peer delivered; no session state created",
                ],
              },
            ],
          },
        ],
      },
    },
  ],
  studyPlan: [
    {
      id: "weightage",
      heading: "Exam weightage - where to spend the hours",
      weightedTopics: [
        { topic: "Buffer cache (header, pool, getblk) and block I/O", weight: "about 10-12 marks", note: "The classic Bach-book question - two lists plus algorithm." },
        { topic: "Inodes, regular-file structure, directories, super block", weight: "about 10-12 marks", note: "Size arithmetic + namei walk + ialloc." },
        { topic: "File syscalls and pipes/mounting", weight: "about 8-10 marks", note: "Lifecycle walkthrough + EOF discipline." },
        { topic: "Processes: fork/exec/wait, signals, scheduling", weight: "about 10-12 marks", note: "Shell walkthrough, sigaction, decay formula." },
        { topic: "Access control, auditing, trusted computing", weight: "about 8-10 marks", note: "Reference-monitor triad + DAC/MAC + TPM chain." },
        { topic: "Malware: analysis, rootkits, ransomware, honeypots", weight: "about 10-12 marks", note: "Triage pipeline + hook walkthrough + capture workflow." },
        { topic: "Hardening: CVE/CVSS, config, virtualization, Android", weight: "about 8-10 marks", note: "Prioritization rule + isolation spectrum + UID/SELinux." },
        { topic: "Windows internals and Winsock", weight: "about 8-10 marks", note: "Architecture layers + worker threads + echo pair." },
      ],
    },
    {
      id: "schedule",
      heading: "A six-week study schedule",
      body: [
        "Two hours a day, five days a week; weekends for drawings and code. This subject splits into a UNIX half (Units I-II), a security half (III-IV) and a Windows half (V) - keep one notebook section per half and one diagram per section.",
      ],
      weeks: [
        { week: "Week 1", focus: "Unit I - UNIX kernel", tasks: ["Architecture layers + write() syscall trace", "Buffer header/pool + getblk walkthrough", "bread/delayed-write lifecycle + read-ahead", "Inode fields + size arithmetic (1KB/4-byte)", "Directories + super block + ialloc", "File syscall lifecycle + pipe/mount mechanics"] },
        { week: "Week 2", focus: "Unit II - processes and IPC", tasks: ["Address-space map + proc/u-area split", "fork/exec/wait + COW + zombies", "Signals: delivery, sigaction, exec-reset", "Scheduling decay formula + trace", "setuid walkthrough + Anderson taxonomy", "Concurrency principles + getblk race", "System V IPC: shm + semop + ptrace"] },
        { week: "Week 3", focus: "Unit III - OS security", tasks: ["Reference-monitor triad + DAC/MAC/RBAC/caps", "auditd/SACL examples + TCB/TPM chain", "Multics rings + principles mapping", "Malware triage + IOCs + YARA", "Virus/worm/trojan defence mapping", "Rootkit hooks + ransomware tells + polymorphism", "Honeypot taxonomy + capture workflow"] },
        { week: "Week 4", focus: "Unit IV - hardening", tasks: ["CVE/CWE/CVSS + KEV rule", "Hardening checklist + drift loop", "Isolation spectrum + escape classes", "Mobile architecture + permission flow", "Android: UID sandbox + SELinux + verified boot", "OWASP classes + injection pair + pipeline", "TPM/TEE/SE family + wallet walkthrough"] },
        { week: "Week 5", focus: "Unit V - Windows and Winsock", tasks: ["Version milestones + Sysinternals map", "Architecture layers + SRM/CreateFile", "Worker-thread deferral chain + gflags", "ALPC ports + section objects", "Winsock TCP echo pair (WSAStartup bookends)", "Function/structure inventory + select loop", "Stream vs datagram contrast"] },
        { week: "Week 6", focus: "Revision and papers", tasks: ["Re-draw every diagram from memory", "Re-type the C code: echo pair, shm/sem, sigaction", "Two full past papers under time", "Error log rewritten three times", "One-page UNIX sheet + one-page security sheet + one-page Windows sheet"] },
      ],
    },
    {
      id: "exam-tips",
      heading: "Exam-hall strategy",
      examTips: [
        "Kernel questions are diagram questions: buffer pool (two lists), inode pointer cascade, process address space, Windows layer stack - draw first, then explain.",
        "Every algorithm gets a walkthrough: getblk, bread, namei, ialloc, fork/exec - trace one concrete case with values.",
        "Do the inode size arithmetic with the division shown: 1024/4 = 256 pointers, then 10 KB / 256 KB / 64 MB / more.",
        "For security questions, anchor on the reference-monitor triad and map each mechanism to it - the triad is the grading rubric.",
        "For malware questions, name the behaviour, not just the family: syscall-hook filter, shadow-copy deletion, entropy spike.",
        "For Android and Windows, pair the layers: DAC-by-construction + MAC-by-policy; HAL -> kernel -> executive -> user.",
        "For Winsock, the WSAStartup/WSACleanup bookends and WSAGetLastError are the Windows-specific marks - state them first.",
        "Time-box: 7-mark about 12 minutes, 14-mark about 22 minutes; keep 10 minutes to re-check every diagram's labels.",
      ],
    },
    {
      id: "slips",
      heading: "Last-day strategy and common slips",
      body: [
        "Last day: re-draw the six anchor diagrams (buffer pool, inode cascade, address space, TPM boot chain, Android stack, Windows architecture), re-type the three code shapes (file syscall lifecycle, shm+sem pair, Winsock echo), and re-read the two rule sheets: the reference-monitor triad and the five-model I/O ladder. No new material tonight - consolidation wins this subject.",
      ],
      bullets: [
        "Forgetting the delayed-write skip in getblk - it is the algorithm's data-safety half.",
        "Quoting file sizes without the 1024/4 division - show the pointer count first.",
        "Claiming EOF fires when the writer exits - it fires when ALL write ends close.",
        "Mixing real and effective uid - effective decides permissions; real identifies.",
        "Saying signals carry payloads - they are numbers; POSIX real-time signals add minimal payload.",
        "Confusing spinlocks (interrupt context) with mutexes (process context) - context decides.",
        "Describing pickle-style details in malware answers - tie families to OS mechanisms instead.",
        "Treating CVSS as risk - risk = severity x exposure x exploitability; KEV overrides.",
        "Running hostile samples in shared-kernel containers - kernel bugs escape; use VMs.",
        "Calling socket() before WSAStartup - WSANOTINITIALISED; bookends first.",
        "Forgetting that connected UDP creates no session - it fixes the peer only.",
        "Quoting 'LPC' without noting ALPC is the modern name - one-line clarification earns the currency mark.",
      ],
    },
  ],
};
