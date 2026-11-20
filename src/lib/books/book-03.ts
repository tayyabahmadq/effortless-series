/**
 * Book 03 — Master Authentication.
 *
 * Expanded to the format and quality bar set by the golden reference
 * (_reference.ts): 3-section deep dive, one diagram, pitfalls, field
 * checklist, key terms, interview Q&As and a quiz on every chapter.
 */
import type { Book } from "../types";

export const book03: Book = {
  id: "book-03",
  number: 3,
  title: "Master Authentication",
  subtitle: "Book 03 of 13 · The Effortless Series",
  tagline:
    "The complete identity manual: sessions and cookies, JWTs, refresh-token rotation, OAuth 2.0 and OIDC with PKCE, social login, RBAC, 2FA, password resets, rate limits, revocation, passkeys and account-takeover defense.",
  description:
    "Authentication is the front door of every system and the single most attacked surface in software. Build it the boring, correct way.",
  layer: "Gate identity and keys",
  layerQuestion: "Who are you, what may you do, and what credentials are in play?",
  accentColor: "#f87171",
  emoji: "03",
  months: "Month 3",
  chapters: [
    {
      number: 1,
      title: "Sessions and Cookies",
      summary:
        "The oldest authentication technology is still the best default: the server remembers who you are, and the browser just carries a random ticket.",
      keyIdea:
        "Sessions by default for monoliths and server-rendered apps — opaque, instantly revocable, no crypto to get wrong.",
      deepDive: [
        {
          heading: "The ticket, not the passport",
          paragraphs: [
            "A session is the server keeping a small record — user id, creation time, maybe a role — and handing the browser a random, meaningless ticket that points at it. The cookie carries the ticket; the server holds the truth. Nothing sensitive rides in the cookie, so there is nothing to decode, tamper with, or let expire wrongly. When the user logs out, you delete one row and every copy of that ticket goes dead instantly, everywhere.",
            "That instant revocability is why sessions remain the correct default for monoliths and server-rendered apps in 2026. Frameworks make it nearly free: Express ships express-session, Rails has its session store, and Next.js pairs cleanly with a database-backed cookie handler. The failure modes are operational, not cryptographic — storage growth, expired-row cleanup, a forgotten cookie flag. Those are Tuesday problems; a mis-verified JWT signature is a breach.",
          ],
        },
        {
          heading: "Cookie flags are the protocol",
          paragraphs: [
            "The cookie attributes are not decoration; they are the security model. HttpOnly keeps JavaScript from reading the ticket, which is what makes an XSS bug unable to steal your session. Secure keeps it off plain HTTP. SameSite=Lax or Strict decides whether the browser attaches it on cross-site requests, which is your first line of CSRF defense. Set all three on every session cookie, plus a sensible Max-Age, and reach for SameSite=None only when a genuine cross-site integration forces it.",
            "Session id hygiene matters as much as flags. Generate ids with a CSPRNG — 128 bits of entropy minimum — so they cannot be guessed or enumerated. Rotate the id at login to defeat session fixation, where an attacker plants a known id before you authenticate. And store sessions server-side: a database or Redis table you can inspect, count, and delete. In-memory stores lose every login on deploy; signed client-side cookies claiming to be sessions are just JWTs wearing a costume.",
          ],
        },
        {
          heading: "Scale and the storage choice",
          paragraphs: [
            "The scaling fear — sessions do not work across servers — died with shared stores. Point every instance at the same Redis or Postgres table and any node can serve any request. A sessions table in Postgres gives you joins, auditability and transactional logout; Redis buys TTL-based expiry for free and shrugs off a lost session. Choose by how often you read and how much history you need, not by fashion.",
            "Size the trade honestly. A session lookup is one indexed read per request — trivially fast, and cacheable in memory for milliseconds if it ever matters. What you buy back is enormous: kill any session from an admin console, list a user's active devices, force global logout after a breach. Token advocates call this statefulness a cost; security engineers call it the control panel. For most products, the control panel wins.",
          ],
        },
      ],
      diagram: {
        kind: "flow",
        title: "A session request, end to end",
        caption: "The browser carries a random ticket; the server holds every fact that matters.",
        steps: [
          { label: "Login", note: "verify password once" },
          { label: "Set-Cookie", note: "HttpOnly, Secure, SameSite" },
          { label: "Request", note: "browser sends ticket" },
          { label: "Session store", note: "one indexed lookup" },
          { label: "Decision", note: "revoke lives here" },
        ],
      },
      codeExample: {
        language: "sql",
        caption: "One sessions table: instant revocation, device listing, and a cleanup sweep.",
        code: [
          "CREATE TABLE sessions (",
          "  id          TEXT PRIMARY KEY,  -- 128-bit random, never sequential",
          "  user_id     BIGINT NOT NULL REFERENCES users(id) ON DELETE CASCADE,",
          "  created_at  TIMESTAMPTZ NOT NULL DEFAULT now(),",
          "  expires_at  TIMESTAMPTZ NOT NULL,",
          "  ip          INET,",
          "  user_agent  TEXT",
          ");",
          "CREATE INDEX ON sessions (user_id);    -- list a user's devices",
          "CREATE INDEX ON sessions (expires_at); -- cleanup sweep",
          "",
          "DELETE FROM sessions WHERE expires_at < now();",
        ].join("\n"),
      },
      pitfalls: [
        {
          mistake: "Storing the session id in localStorage and sending it in a header.",
          fix: "Keep it in an HttpOnly cookie. localStorage is readable by every script that ever runs on the page, including one compromised dependency.",
        },
        {
          mistake: "Forgetting SameSite, then fighting CSRF with duct tape.",
          fix: "Set SameSite=Lax by default. It kills most cross-site cookie attachment in one attribute; add CSRF tokens for the cross-site flows you cannot avoid.",
        },
        {
          mistake: "Accepting a session id the client supplied before login (fixation).",
          fix: "Always issue a fresh id at authentication and invalidate the old one. Regenerate on privilege changes too.",
        },
        {
          mistake: "Sessions in a single process's memory.",
          fix: "Use a shared store — Redis or the database — so any instance validates any request and deploys stop logging everyone out.",
        },
      ],
      fieldChecklist: [
        "I have set HttpOnly, Secure and SameSite on every authentication cookie.",
        "Session ids come from a CSPRNG with at least 128 bits of entropy.",
        "I rotate the session id at login, so fixation cannot survive authentication.",
        "I can list a user's active sessions and kill any one of them from the server.",
        "Expired sessions are swept on a schedule, and the store cannot grow without bound.",
        "I have tested logout in two browsers and confirmed the old ticket is dead everywhere.",
      ],
      keyTerms: [
        {
          term: "Session",
          definition:
            "Server-side state identifying a logged-in user, referenced by an opaque random ticket the browser carries.",
        },
        {
          term: "HttpOnly",
          definition:
            "A cookie attribute that blocks JavaScript from reading the cookie, capping the damage of an XSS bug.",
        },
        {
          term: "Session fixation",
          definition:
            "An attack that plants a known session id before login; defeated by regenerating the id at authentication.",
        },
        {
          term: "CSRF",
          definition:
            "Cross-site request forgery — a third-party site causes the browser to send its cookie with a forged request; SameSite is the first defense.",
        },
      ],
      interviewQuestions: [
        {
          q: "Why do you default to sessions instead of JWTs?",
          a: "Because revocation is a row delete and there is no crypto to mis-configure. Sessions keep all trust server-side: the cookie is a random ticket, so nothing in it can be forged or mined. For a monolith or server-rendered app the lookup cost is one indexed read. I reach for tokens when the architecture genuinely cannot share state — third-party APIs, mobile clients against microservices — and pair them with rotation.",
        },
        {
          q: "How would you implement log out everywhere?",
          a: "Store sessions server-side keyed by user. The feature is one DELETE on user_id, or a per-user invalidation counter every session check compares against. Any design where the credential is unconditionally valid until expiry — a plain JWT with no denylist — cannot offer this honestly. This is the capability teams only miss after an incident, so I build it in from the first login.",
        },
        {
          q: "What actually protects a session cookie from XSS and CSRF?",
          a: "HttpOnly stops JavaScript from reading the cookie, so an XSS cannot exfiltrate the ticket. SameSite=Lax stops the browser attaching it on most cross-site requests, which defuses classic CSRF. Secure keeps it off plain HTTP. None of these excuses shipping XSS in the first place — they are containment, and I still escape output and keep a strict content security policy.",
        },
      ],
      quiz: [
        {
          question: "Which cookie attribute stops JavaScript from reading the session cookie?",
          options: ["SameSite=Lax", "HttpOnly", "Secure", "Max-Age"],
          answerIndex: 1,
          explanation:
            "HttpOnly hides the cookie from document.cookie and from every script on the page. It does not stop the browser from sending the cookie — that is SameSite's job, which is why the two attributes pair.",
        },
        {
          question: "Users report being logged out after every deploy. The likely cause?",
          options: [
            "Sessions stored in the instance's memory",
            "Cookie flags too strict",
            "Session ids too short",
            "Missing index on the sessions table",
          ],
          answerIndex: 0,
          explanation:
            "In-memory session stores reset on every restart and deploy, dropping all tickets. Point every instance at one shared store — Redis or the database — and deploys stop logging people out.",
        },
        {
          question: "An attacker sends a victim a link that pre-sets a known session id. What defeats this?",
          options: ["Longer session ids", "HttpOnly", "Rotating the session id at login", "Rate limiting"],
          answerIndex: 2,
          explanation:
            "Fixation only works if the attacker's id survives authentication untouched. Regenerating the id server-side at login — and on privilege changes — makes every planted value worthless.",
        },
      ],
    },
    {
      number: 2,
      title: "JWT",
      summary:
        "A JWT is a signed JSON receipt: the server wrote down who you are, signed it, and handed you the copy. Verifying is free; revoking is not.",
      keyIdea:
        "Pin the algorithm at verification, never trust the header. Payload is base64, not encrypted — never put secrets in it.",
      deepDive: [
        {
          heading: "A signed receipt, not a secret",
          paragraphs: [
            "A JWT is three base64url segments joined by dots: header, payload, signature. The payload is readable by anyone who pastes it into a decoder — it is encoded, never encrypted. Everything in it is a claim the server vouches for with the signature: user id, expiry, maybe a role. The moment you put an email address, an internal id, or anything sensitive into the payload, you have published it to every browser, log file and proxy the token touches.",
            "The signature changes verification economics. Any service holding the public key can validate the token locally — no database round-trip, no shared session store. That is the genuine superpower: stateless verification across microservices and edge functions. The cost is equally genuine: the token is valid until exp, period. Logout, a role downgrade, or a fired employee does not un-sign it. Every JWT architecture is really an exercise in buying back that revocability, which Chapters 3 and 13 cover.",
          ],
        },
        {
          heading: "Pin the algorithm, verify everything",
          paragraphs: [
            "The classic JWT failures are verification failures, not cryptography failures. Libraries that take the algorithm from the token header invited the alg=none attack — strip the signature, claim no algorithm, walk in — and the RS-to-HS confusion attack, where a public key is abused as an HMAC secret. The fix is boring: hard-code the expected algorithm at the verify call. One pinned string closes the entire class.",
            "After the algorithm, verify the claims you actually rely on: exp first, then iss and aud, so a token minted for the payments service cannot impersonate one for the admin panel. Fetch signing keys from the provider's JWKS endpoint and cache them, so key rotation is a non-event. A token that passes signature but fails audience is exactly as dangerous as a forged one — treat every claim check as load-bearing.",
          ],
        },
        {
          heading: "Choose the token for the job",
          paragraphs: [
            "Access tokens should be short-lived — ten to fifteen minutes is a sane default — and carry only what receivers need. Keep payloads lean: every byte ships on every request, and claims nobody reads become claims nobody notices leaking. If you find yourself wanting permissions inside a JWT, remember they will be stale for the token's whole life; a role revoked at noon is still admin until quarter past.",
            "The decision rule: sessions when you control both ends and need instant revocation; JWTs when verification must happen without a shared store. Most real systems end up with both — a session for the browser, short-lived JWTs for service-to-service calls — and that is healthy. What is not healthy is a long-lived JWT in localStorage with no rotation, which is Chapter 12's nightmare scenario.",
          ],
        },
      ],
      diagram: {
        kind: "compare",
        title: "Session ticket vs signed receipt",
        caption: "Stateless verification is the superpower; un-revocability is the invoice.",
        left: {
          heading: "Session cookie",
          items: [
            "Server holds state; cookie is a random id",
            "Revoke by deleting one row — instant",
            "Every request costs one store lookup",
            "Framework support is mature and boring",
          ],
        },
        right: {
          heading: "JWT access token",
          items: [
            "Token carries the claims, signed",
            "Verify locally with the public key",
            "Valid until exp — revocation is hard",
            "Payload is base64, readable by anyone",
          ],
        },
      },
      codeExample: {
        language: "ts",
        caption: "Algorithm pinned, issuer and audience checked, keys fetched from JWKS.",
        code: [
          "import { jwtVerify, createRemoteJWKSet } from 'jose';",
          "",
          "const JWKS = createRemoteJWKSet(new URL(process.env.JWKS_URL!));",
          "",
          "export async function requireUser(rawToken: string) {",
          "  const { payload } = await jwtVerify(rawToken, JWKS, {",
          "    algorithms: ['RS256'], // pinned; never read from the header",
          "    issuer: process.env.TOKEN_ISSUER,",
          "    audience: process.env.TOKEN_AUDIENCE,",
          "    clockTolerance: 5, // seconds of skew slack",
          "  });",
          "  if (!payload.sub) throw new Error('missing sub claim');",
          "  return { id: payload.sub, exp: payload.exp };",
          "}",
        ].join("\n"),
      },
      pitfalls: [
        {
          mistake: "Letting the verify call accept the algorithm from the token header.",
          fix: "Pin algorithms: ['RS256'] (or HS256 with a strong secret) explicitly. The alg=none and RS-to-HS confusion attacks both die at this line.",
        },
        {
          mistake: "Putting personal data or internal secrets in the JWT payload.",
          fix: "The payload is readable base64, not encryption. Keep it to sub, exp, and the minimal claims receivers actually check.",
        },
        {
          mistake: "Skipping iss and aud checks because the signature passed.",
          fix: "A validly signed token minted for another audience is still an intruder. Verify issuer, audience and expiry on every request.",
        },
        {
          mistake: "Access tokens that live for days to keep things simple.",
          fix: "Ten to fifteen minutes. Longevity is what revocation fights; keep the window small and let refresh tokens carry the lifespan.",
        },
      ],
      fieldChecklist: [
        "The algorithm is pinned at every verify call in every service.",
        "I verify exp, iss and aud on every token, not just the signature.",
        "Signing keys come from a cached JWKS endpoint, so rotation needs no deploy.",
        "Payloads carry sub and exp and almost nothing else.",
        "I can decode one of our production tokens on request and name every claim in it.",
        "No token in this system outlives fifteen minutes without a refresh path behind it.",
      ],
      keyTerms: [
        {
          term: "Claim",
          definition:
            "A statement inside a JWT payload — sub, exp, aud — that the signature lets receivers trust without asking the issuer.",
        },
        {
          term: "Base64url",
          definition:
            "URL-safe encoding of JWT segments; it is encoding for transport, not encryption, and anyone can read it.",
        },
        {
          term: "alg header",
          definition:
            "The JWT header field naming the signing algorithm; safe only as metadata, never as input to the verifier.",
        },
        {
          term: "JWKS",
          definition:
            "JSON Web Key Set — the issuer's published public keys, fetched and cached so signature verification needs no shared secret.",
        },
      ],
      interviewQuestions: [
        {
          q: "A JWT's signature is valid but the request looks wrong. What do you check next?",
          a: "The claims beyond the signature: exp against clock skew, then iss and aud, because a perfectly signed token minted for a different service is still an intrusion. Then sub against my denylist of revoked users, since a JWT cannot revoke itself. Signature proves who minted the token; claims prove it was minted for me, now, and still stands.",
        },
        {
          q: "Where do JWTs actually beat sessions?",
          a: "Anywhere verification cannot reach a shared store: service-to-service calls, edge functions, mobile clients hitting regional APIs. Local verification with a public key removes a round-trip and a dependency on central state. Inside a monolith where both ends are mine, that advantage vanishes and sessions' instant revocation wins — so I use both, matched to the topology.",
        },
        {
          q: "How do you revoke a JWT?",
          a: "You cannot revoke the string, so you shrink what it protects and check revocation state around it. Short expiry bounds the damage; refresh-token rotation with family revocation cuts off stolen credentials; a denylist on jti in Redis handles emergency kills of individual tokens. The moment revocation matters more than the round-trip it saves, use a session.",
        },
      ],
      quiz: [
        {
          question: "What does the JWT payload's base64 encoding give you?",
          options: ["Confidentiality", "Compression", "Readability by anyone, with no secrecy at all", "Tamper resistance"],
          answerIndex: 2,
          explanation:
            "Base64 is transport encoding, not encryption. Anyone holding the token can decode the payload, which is why secrets and personal data never belong in it — assume every byte is public.",
        },
        {
          question: "A service accepts tokens with whatever algorithm the header names. Real risk?",
          options: [
            "Slower verification",
            "The alg=none and key-confusion forgeries validate as genuine",
            "Larger payloads",
            "Nothing — the signature still protects it",
          ],
          answerIndex: 1,
          explanation:
            "Reading the algorithm from the token lets an attacker choose the weakest path — unsigned tokens, or an RS256 public key abused as an HMAC secret. Pinning the algorithm at verification closes both attacks.",
        },
        {
          question: "Which expiry strategy is right for a JWT access token?",
          options: [
            "Ten to fifteen minutes, backed by refresh tokens",
            "30 days to avoid refresh complexity",
            "No expiry inside a trusted network",
            "One hour, renewed by re-login",
          ],
          answerIndex: 0,
          explanation:
            "Short access tokens bound the damage of any leak, and refresh tokens carry the lifespan with rotation behind them. Long-lived access tokens are un-revocable credentials waiting to leak.",
        },
      ],
    },
    {
      number: 3,
      title: "Refresh Tokens",
      summary:
        "Short-lived access tokens are only usable if something can quietly get you a new one. That something is the refresh token — and its rotation is what makes the whole scheme revocable.",
      keyIdea: "Rotation on every use; replay of a rotated token revokes the family and fires an alert.",
      deepDive: [
        {
          heading: "Two lifetimes, one design",
          paragraphs: [
            "The pair works because the lifetimes differ. The access token is small and short — minutes — and gets flashed at every API, so assume it leaks eventually. The refresh token is long — days to weeks — and is used exactly once per rotation, only against the auth server. Short access tokens bound what a leak is worth; the refresh layer is where revocation, rotation and detection actually live.",
            "Rotation is the keystone. Every time a refresh token is used, the auth server marks it consumed and issues a new one. The client keeps only the latest; the server keeps the family's lineage. Now a stolen refresh token is a trap: the thief uses it, the legitimate client's next use replays a consumed token, and that replay is the alarm bell.",
          ],
        },
        {
          heading: "Replay of a used token is an incident",
          paragraphs: [
            "When the server sees an already-rotated refresh token presented again, it cannot know which copy is the thief's, so it revokes the entire family — every descendant of that original grant — and fires an alert. The user is inconvenienced with one re-login; the attacker loses a credential they may have held for days. That asymmetry is the whole trick: a rare false alarm buys near-certain detection of token theft.",
            "For this to work, refresh tokens must be opaque random values stored hashed server-side — not self-contained JWTs. You need to look up, consume and lineage-track them, which means a store: a tokens table with family id, status and expiry. Browsers should hold the refresh token in an HttpOnly, Secure, SameSite cookie scoped to the auth path, never in JavaScript-readable storage.",
          ],
        },
        {
          heading: "Lifetimes and boundaries",
          paragraphs: [
            "Reasonable starting points: access tokens fifteen minutes, refresh tokens seven to thirty days, rotation on every use. Pair a sliding window with an absolute cap: sliding expiry rewards daily users with seamless renewals, while the absolute cap ensures dormant families eventually die and force a real login. Idle sessions should be the thing that fails — that is the correct direction for them to fail in.",
            "Bound the blast radius by context. Bind refresh tokens to the client and device that earned them, and be suspicious when the same family is refreshed from a different IP or user agent within seconds. Granular scopes help too: a refresh grant for the calendar API should not be able to mint access tokens for billing. Small grants, fast detection, cheap recovery.",
          ],
        },
      ],
      diagram: {
        kind: "cycle",
        title: "The rotation loop",
        caption: "Every use rotates the token; a replay is not an error to log — it is a theft to answer.",
        steps: [
          { label: "Present refresh", note: "auth server only" },
          { label: "Check family", note: "consumed already?" },
          { label: "Rotate", note: "old token consumed" },
          { label: "Issue pair", note: "new access + refresh" },
          { label: "Replay seen", note: "revoke the family" },
          { label: "Alert", note: "page the on-call" },
        ],
      },
      codeExample: {
        language: "ts",
        caption: "Rotation on use; replay of a consumed token revokes the family.",
        code: [
          "app.post('/auth/refresh', async (req, res) => {",
          "  const presented = req.cookies.refresh; // HttpOnly cookie",
          "  const family = await tokens.findFamily(presented);",
          "  if (!family) return res.status(401).end();",
          "  if (family.replayedAt) {",
          "    await tokens.revokeFamily(family.id); // replay = theft",
          "    securityAlert.refreshReplay(family);",
          "    return res.status(401).end();",
          "  }",
          "  await tokens.consume(presented); // mark used, exactly once",
          "  const next = await tokens.issue(family.userId, family.id);",
          "  res.cookie('refresh', next.token, cookieOpts);",
          "  res.json({ access: signAccess(family.userId) });",
          "});",
        ].join("\n"),
      },
      pitfalls: [
        {
          mistake: "Refresh tokens stored as long-lived self-contained JWTs.",
          fix: "Use opaque random strings, hashed at rest. You must look up, consume and lineage-track them — a self-contained token cannot be consumed.",
        },
        {
          mistake: "No rotation — the same refresh token reused forever.",
          fix: "Rotate on every use and track lineage per grant. Rotation turns replay into a detection signal instead of a silent leak.",
        },
        {
          mistake: "Replay treated as a 401 in the logs and nothing else.",
          fix: "Revoke the whole family and alert a human. A replayed rotation is evidence of a stolen token, not client flakiness.",
        },
        {
          mistake: "Refresh cookie scoped to the whole domain with SameSite=None.",
          fix: "Scope the cookie to the auth path, set HttpOnly, Secure, SameSite=Lax, and keep JavaScript away from the credential entirely.",
        },
      ],
      fieldChecklist: [
        "I have rotation on every refresh use, with lineage tracked per grant.",
        "Refresh tokens are opaque, hashed at rest, and never self-contained JWTs.",
        "A replayed token revokes the whole family and pages someone, not just logs a 401.",
        "Access tokens live fifteen minutes or less.",
        "The refresh cookie is HttpOnly, Secure, SameSite=Lax and path-scoped.",
        "I have tested the theft scenario: replay a consumed token, watch the family die.",
      ],
      keyTerms: [
        {
          term: "Refresh token",
          definition:
            "A long-lived, opaque credential used only against the auth server to obtain new access tokens; where rotation and revocation live.",
        },
        {
          term: "Rotation",
          definition:
            "Issuing a new refresh token and consuming the old one on every use, so replay becomes detectable theft evidence.",
        },
        {
          term: "Token family",
          definition:
            "The lineage of refresh tokens descended from one original grant; a replay revokes the entire family.",
        },
        {
          term: "Opaque token",
          definition:
            "A random value with no intrinsic meaning, verified by lookup — the opposite of a self-contained JWT.",
        },
      ],
      interviewQuestions: [
        {
          q: "Why rotate refresh tokens at all?",
          a: "Because rotation converts theft into detection. After a token is used, only the newest copy is valid; a thief holding an older one produces a replay the moment the real client refreshes. The server answers by revoking the family and alerting. Without rotation a stolen refresh token is simply a long-lived second identity, and nobody ever learns it was stolen.",
        },
        {
          q: "How long should each token live?",
          a: "Access tokens ten to fifteen minutes — they travel everywhere, so keep their worth low. Refresh tokens seven to thirty days, rotated on every use, with an absolute cap so dormant families expire. Daily users stay seamless; a stolen credential set is worthless within minutes, and long-idle accounts re-authenticate, which is the safe failure direction.",
        },
        {
          q: "A user's refresh token was replayed from another country. What happens next?",
          a: "The auth server sees a consumed token, revokes the entire family, alerts security, and the next request from any holder fails to a clean 401 that forces login. The user re-authenticates — ideally with MFA — and we review which device held which copy. The blast radius is one grant, not one account, and definitely not the system.",
        },
      ],
      quiz: [
        {
          question: "What makes refresh-token rotation a detection mechanism, not just hygiene?",
          options: [
            "New tokens are signed differently",
            "A replayed consumed token exposes theft, triggering family revocation",
            "It reduces database load",
            "Rotation tokens expire faster",
          ],
          answerIndex: 1,
          explanation:
            "After rotation, exactly one copy of the token is valid. When the stolen copy is used, the server sees a consumed token — hard evidence of theft — and answers by revoking the family and firing an alert.",
        },
        {
          question: "Why should refresh tokens be opaque rather than self-contained JWTs?",
          options: [
            "Opaque tokens are smaller",
            "JWTs are slower to parse",
            "The server must look up, consume and lineage-track them; stateless tokens cannot be consumed",
            "JWTs cannot be signed",
          ],
          answerIndex: 2,
          explanation:
            "Rotation and revocation require server-side state: consume-on-use, family lineage, revocation flags. A self-contained token carries no state the server can flip, so it can never be consumed or revoked.",
        },
        {
          question: "A refresh token leaks. What bounds the damage?",
          options: [
            "The cookie's Max-Age",
            "The access token's audience claim",
            "HTTPS encryption",
            "Short access-token lifetime plus family revocation on replay",
          ],
          answerIndex: 3,
          explanation:
            "The thief must eventually use the refresh endpoint, where rotation and replay detection live. Short access-token lifetimes cap what any already-issued token is worth in the meantime.",
        },
      ],
    },
    {
      number: 4,
      title: "OAuth 2.0",
      summary:
        "OAuth is not login. It is permission delegation: 'let this app do these things on my behalf, without ever seeing my password.'",
      keyIdea: "Authorization code flow only for user-facing clients. The redirect URI is the security boundary.",
      deepDive: [
        {
          heading: "Delegation, not authentication",
          paragraphs: [
            "OAuth 2.0 solves a narrow, brilliant problem: how does a third-party app get limited access to a user's resources without ever handling the user's password? The app is redirected to the provider, the user authenticates and consents there, and the app receives tokens scoped to exactly what was approved. The password never crosses the app's boundary, and access can be revoked at the provider without touching the app.",
            "Calling this login is the industry's oldest protocol mislabel. An access token from OAuth says this app may call this API — it says nothing about who the user is to your system. Products that treated OAuth access tokens as identity built systems where any account at the provider could become any account at the app. Chapter 11 covers the fix: OIDC layers identity on top. Keep the two concepts separated in your head.",
          ],
        },
        {
          heading: "The authorization code flow",
          paragraphs: [
            "For anything user-facing, the flow is authorization code with PKCE. The app sends the browser to the provider's authorize endpoint with client id, redirect URI, scopes and a PKCE challenge. The user logs in and consents on the provider's pages. The provider redirects back with a one-time code, and the app's backend exchanges that code — with its client secret or PKCE verifier — for tokens over a direct, server-to-server call.",
            "Every safeguard in the flow exists because the browser is hostile territory. The code travels through a browser, so it is single-use and short-lived; the tokens are exchanged server-side, so they never touch the address bar; state and PKCE bind the response to the request that started it. If you implement this by hand, those are the details you must not skip — and you should not implement it by hand.",
          ],
        },
        {
          heading: "The redirect URI is the boundary",
          paragraphs: [
            "The entire flow trusts one assumption: the authorization response goes back to the app that started it, identified by its registered redirect URI. If an attacker can get a code — or worse, a token — delivered to a URI they influence, the flow leaks. So redirect URIs are exact-match registered, never wildcarded, and the state parameter ties each response to a session so responses cannot be swapped or injected.",
            "Operational discipline follows. Store client secrets in your secret manager, never in a single-page app. Exchange tokens from a backend, not a browser. Log consent grants so you can answer which third-party apps can touch this user, and revoke the answer. Use an established library or provider SDK rather than hand-rolling — the spec's flexibility is a trap for the unreviewed implementation.",
          ],
        },
      ],
      diagram: {
        kind: "flow",
        title: "Authorization code flow",
        caption: "The code rides the browser; the tokens never do.",
        steps: [
          { label: "App redirects", note: "client id, redirect URI, state" },
          { label: "Provider login", note: "user logs in, grants scopes" },
          { label: "Code redirect", note: "one-time code, exact URI match" },
          { label: "Token exchange", note: "server-side, code + verifier" },
          { label: "Scoped tokens", note: "never touch the browser" },
        ],
      },
      codeExample: {
        language: "bash",
        caption: "The exchange happens server to server; tokens never pass through a browser.",
        code: [
          "# Server-side exchange: the code rode the browser, the tokens must not",
          "curl -s -X POST $TOKEN_ENDPOINT \\",
          "  -H 'Content-Type: application/x-www-form-urlencoded' \\",
          "  --data-urlencode grant_type=authorization_code \\",
          "  --data-urlencode code=$ONE_TIME_CODE \\",
          "  --data-urlencode redirect_uri=$REGISTERED_REDIRECT_URI \\",
          "  --data-urlencode client_id=$CLIENT_ID \\",
          "  --data-urlencode code_verifier=$PKCE_VERIFIER",
        ].join("\n"),
      },
      pitfalls: [
        {
          mistake: "Treating an OAuth access token as proof of identity.",
          fix: "Access tokens authorize API calls; identity needs an OIDC ID token verified by audience and nonce. Keep the two protocols separate.",
        },
        {
          mistake: "Wildcard or loose redirect URI matching.",
          fix: "Register exact URIs and compare them as plain strings. The redirect is where responses land; looseness is a token-leak channel.",
        },
        {
          mistake: "Skipping state and PKCE because it is only a web app.",
          fix: "state defeats CSRF on the callback and PKCE defeats code interception. Each is one line with any modern library.",
        },
        {
          mistake: "Exchanging tokens from browser JavaScript.",
          fix: "Exchange server-side, or use PKCE with no implicit flow. Tokens reachable from page scripts end up in extensions, history and devtools.",
        },
      ],
      fieldChecklist: [
        "Every user-facing client uses the authorization code flow with PKCE.",
        "Redirect URIs are exact-match registered and compared as plain strings.",
        "state is generated per attempt, bound to the session, and verified on callback.",
        "The token exchange runs on the backend; tokens never touch the browser.",
        "I can list, per user, which third-party apps hold grants — and revoke them.",
        "Client secrets live in the secret manager, never in frontend bundles.",
      ],
      keyTerms: [
        {
          term: "Authorization code",
          definition:
            "A one-time, short-lived code the provider returns via redirect; exchanged server-side for tokens, never usable twice.",
        },
        {
          term: "Consent",
          definition:
            "The provider-side screen where the user approves specific scopes; the boundary between delegation and free rein.",
        },
        {
          term: "Scope",
          definition:
            "A named permission limit attached to tokens, such as read-only calendar access; the granularity of what was delegated.",
        },
        {
          term: "Redirect URI",
          definition:
            "The registered, exact-match address the provider sends the authorization response to — the flow's security boundary.",
        },
      ],
      interviewQuestions: [
        {
          q: "Explain OAuth 2.0 as if I were new to it.",
          a: "It is permission delegation. Your app sends the user to the provider, where they log in and approve specific scopes; the app never sees the password. The provider redirects back with a one-time code, your backend exchanges it for tokens, and those tokens grant only the approved access. Revoking access happens at the provider, without the app ever holding a credential that matters.",
        },
        {
          q: "Why is the authorization code flow preferred over implicit?",
          a: "The implicit flow returned tokens through the browser fragment, where extensions, history and scripts could read them, with no refresh capability. The code flow delivers a short, single-use code instead, and tokens are exchanged server-side. With PKCE even public clients get interception protection, so implicit has no remaining advantage and is deprecated in OAuth 2.1.",
        },
        {
          q: "What goes wrong when teams bolt login onto OAuth directly?",
          a: "They accept an access token as identity, and any account at the provider becomes whichever local user they associate it with. Without verifying audience and email claims, an attacker with their own provider account can walk into someone else's app account. That is exactly the hole OIDC's ID token, nonce and audience checks were designed to close.",
        },
      ],
      quiz: [
        {
          question: "What problem does OAuth 2.0 actually solve?",
          options: [
            "Verifying a user's identity",
            "Delegating scoped access without sharing passwords",
            "Encrypting API traffic",
            "Password storage",
          ],
          answerIndex: 1,
          explanation:
            "OAuth is delegation: the user grants an app limited access through the provider, and the password never crosses the app's boundary. Identity is a separate question that OIDC answers one layer up.",
        },
        {
          question: "Why is the redirect URI called the security boundary?",
          options: [
            "It encrypts the authorization code",
            "It rate-limits callbacks",
            "Everything the provider returns is trusted only if it lands at the registered exact URI",
            "It validates user passwords",
          ],
          answerIndex: 2,
          explanation:
            "If a response can be steered to an attacker-controlled address, codes leak regardless of cryptography. Exact-match registration and the state parameter are what keep the loop closed.",
        },
        {
          question: "Where should the authorization code be exchanged for tokens?",
          options: [
            "On the backend, server to server",
            "In browser JavaScript for speed",
            "In the provider's dashboard",
            "Wherever the code was received",
          ],
          answerIndex: 0,
          explanation:
            "The exchange requires the client secret or PKCE verifier and produces long-lived tokens. Doing it server-side keeps access and refresh tokens out of the browser entirely.",
        },
      ],
    },
    {
      number: 5,
      title: "Google and GitHub Login",
      summary:
        "Social login is OAuth with the hard parts outsourced — and two details that trip everyone: account linking and email verification.",
      keyIdea: "Trust only provider-verified emails. Key accounts on (provider, sub), not raw email.",
      deepDive: [
        {
          heading: "What you actually receive",
          paragraphs: [
            "Social login hands you an ID token carrying the provider's claims: sub — the provider's permanent user id — email, email_verified, name and picture. The sub is the anchor: stable, unique per provider, never reused. The email is not an anchor — it is a mutable, provider-issued string that can change, be recycled after account deletion, and vary in case and plus-addressing across grants.",
            "The two claims carry different trust. email_verified tells you the provider confirmed control of the mailbox; an unverified email is text the user typed, and some providers deliver unverified addresses depending on scope. Before any account decision, decode and verify the ID token — signature via JWKS, audience, expiry, nonce — and only then read its claims as evidence.",
          ],
        },
        {
          heading: "Account linking without account takeover",
          paragraphs: [
            "The dangerous moment arrives when a social identity signs in and an account with that email already exists. Auto-linking on email match means anyone who controls an unverified or recycled email inherits the local account — the classic social-login takeover. The safe rule: link only on provider-verified email plus explicit user confirmation, or make linking an action performed from inside the already-authenticated account.",
            "Key the identity table on (provider, sub) — one row per external identity, separate from your users table. A user then holds zero or more linked identities, each carrying its own verified email. This costs one link flow and buys several things: multiple providers per user, clean disconnect flows, and immunity to provider-side email recycling. More tables now; fewer breaches later.",
          ],
        },
        {
          heading: "The operational details that bite",
          paragraphs: [
            "Handle the silent failures: users who cancel consent, ad-blockers eating the provider script, and Apple's relay masking real addresses. Give every social button a plain fallback path, and treat provider outages as routine — your login page must survive a Google outage with grace. Log provider, sub and the linking decision at every sign-in so you can audit a choice a month later.",
            "Keep scopes minimal — profile and email, not every API the provider offers — and request incremental access later if a feature needs it. Store name and picture as snapshots with a refresh strategy, not as live truth. Decide the policy for users whose verified email changes at the provider: updating silently can silently re-point an account, and requiring re-confirmation is safer and almost never noticed.",
          ],
        },
      ],
      diagram: {
        kind: "fork",
        title: "An external identity arrives — now what?",
        caption: "Email is evidence, not identity — linking on it alone is how takeovers happen.",
        start: "Social sign-in received",
        branches: [
          {
            label: "Verified email matches",
            outcome: "Link only after the user confirms",
            good: true,
          },
          {
            label: "No existing account",
            outcome: "Create user keyed on (provider, sub)",
            good: true,
          },
          {
            label: "Email unverified or recycled",
            outcome: "Treat as text; never link on it",
            good: true,
          },
          {
            label: "Auto-link on email alone",
            outcome: "Someone else inherits the account",
            good: false,
          },
        ],
      },
      codeExample: {
        language: "ts",
        caption: "Identity keyed on (provider, sub); email is never the join key.",
        code: [
          "async function signInWithProvider(v: VerifiedIdToken) {",
          "  const identity = await db.identity.findUnique({",
          "    where: { provider_sub: { provider: v.provider, sub: v.sub } },",
          "  });",
          "  if (identity) return startSession(identity.userId);",
          "  // No match: create the user and link. Never link by email alone.",
          "  const user = await db.user.create({ data: { email: v.email } });",
          "  await db.identity.create({",
          "    data: {",
          "      provider: v.provider,",
          "      sub: v.sub,",
          "      userId: user.id,",
          "      emailVerified: v.emailVerified,",
          "    },",
          "  });",
          "  return startSession(user.id);",
          "}",
        ].join("\n"),
      },
      pitfalls: [
        {
          mistake: "Auto-linking a social identity by matching email only.",
          fix: "Link on verified email plus explicit confirmation, or only from inside the authenticated account. Recycled emails make email-only linking a takeover path.",
        },
        {
          mistake: "Keying users on raw email instead of (provider, sub).",
          fix: "An identity table keyed on (provider, sub) survives email changes and recycling, and supports multiple providers per user.",
        },
        {
          mistake: "Assuming email_verified is always true.",
          fix: "Check the claim per provider and per grant; unverified addresses are untrusted text, whatever the UI showed the user.",
        },
        {
          mistake: "The login page dies when a provider has an outage.",
          fix: "Keep a password or one-time-code fallback working at all times, and treat provider 5xx as a normal Tuesday, not a surprise.",
        },
      ],
      fieldChecklist: [
        "ID tokens are verified — signature via JWKS, audience, expiry — before any claim is read.",
        "The identity table is keyed on (provider, sub), never on email.",
        "Linking requires verified email plus explicit user action; nothing links silently.",
        "I have a working non-social fallback for consent cancels and provider outages.",
        "Requested scopes are minimal: profile and email, more only when a feature needs it.",
        "Every sign-in logs provider, sub and the linking decision for later audit.",
      ],
      keyTerms: [
        {
          term: "sub claim",
          definition:
            "The provider's stable, permanent user identifier — the correct anchor for an external identity, unlike email.",
        },
        {
          term: "email_verified",
          definition:
            "A claim stating the provider confirmed mailbox control; absent or false, the email is untrusted text.",
        },
        {
          term: "Account linking",
          definition:
            "Attaching an external identity to an existing local account — safe only with verified email and explicit confirmation.",
        },
        {
          term: "Identity table",
          definition:
            "Rows keyed on (provider, sub) mapping external identities to internal users, keeping providers and users independent.",
        },
      ],
      interviewQuestions: [
        {
          q: "How do you avoid account takeover through social login?",
          a: "I never auto-link on email alone. Identities are keyed on (provider, sub), and linking to an existing account requires a provider-verified email plus explicit confirmation from the user — typically from inside the already-authenticated account. Unverified or recycled emails are treated as untrusted text. That closes the recycled-email and unverified-email takeover paths entirely.",
        },
        {
          q: "A user signs in with Google and GitHub. One account or two?",
          a: "One user, two identity rows. The identity table maps each (provider, sub) to the same internal user, linked explicitly with confirmed email. That preserves per-provider disconnect, keeps provider-side email changes from silently re-pointing the account, and avoids the two-accounts-forever problem that email-keyed designs create.",
        },
        {
          q: "What changes in your system the day Google login has an outage?",
          a: "Nothing user-visible, if it was built correctly: a non-social fallback — password or one-time email code — stays enabled, the UI degrades the button rather than the page, and alerts distinguish our errors from provider 5xx. Provider outages are routine events, so the fallback path is tested as part of login, not improvised during one.",
        },
      ],
      quiz: [
        {
          question: "Which claim should anchor an external identity in your database?",
          options: ["email", "name", "sub from the provider", "picture"],
          answerIndex: 2,
          explanation:
            "sub is stable, unique per provider and never recycled. Emails change, get recycled after deletion, and vary in formatting — they are evidence to verify, never keys to build on.",
        },
        {
          question: "A Google identity arrives whose verified email matches an existing account. Safe action?",
          options: [
            "Auto-link silently — email matched",
            "Ask the user to confirm linking from an authenticated context",
            "Create a second account",
            "Reject the sign-in permanently",
          ],
          answerIndex: 1,
          explanation:
            "An email match is evidence, not proof of ownership. Confirmation from inside the authenticated account — or a deliberate link flow — closes the recycled-email takeover path.",
        },
        {
          question: "Why keep an identity table separate from users?",
          options: [
            "It supports multiple providers per user and survives email recycling",
            "Emails must be stored twice",
            "It makes queries faster",
            "Providers require it",
          ],
          answerIndex: 0,
          explanation:
            "Users and external identities are different counts. Rows keyed on (provider, sub) allow linking, disconnecting and provider changes without touching the user record itself.",
        },
      ],
    },
    {
      number: 6,
      title: "Role Based Access",
      summary:
        "Authentication proves who you are. Authorization decides what you may touch. RBAC is the vocabulary that keeps that second answer from becoming spaghetti.",
      keyIdea: "One authorize() decision point backed by declarative data. Every endpoint calls it.",
      deepDive: [
        {
          heading: "One decision point",
          paragraphs: [
            "Authorization rots when it scatters. The endpoint checks a role, the service re-checks it, a template hides a button, a frontend route guards a page — and six months later nobody can say what a manager may actually do. The discipline is one authorize() function, called by every endpoint, that takes the actor, the action and the resource, and returns allow or deny. Policy lives in data; the decision lives in one place.",
            "Frontend hiding is UX, not security. Grey out the button by all means, but assume every API call arrives crafted with curl. The server's authorize() is the only check that counts, and the test suite proves it: for every endpoint, a matrix of actors and actions asserting exactly one expected verdict. If a new endpoint can ship without a row in that matrix, the process is broken.",
          ],
        },
        {
          heading: "Roles as collections, not identities",
          paragraphs: [
            "A role is a named set of permissions, nothing more. Users hold roles; endpoints demand permissions; the mapping between them is data you can query, diff and version. When someone asks to give the new hire the same access as Maria, the correct answer is a role assignment, not a copy of Maria's fourteen ad-hoc grants. Role explosion — admin, admin2, super-admin, admin-temp — is what happens when permissions hide inside roles instead of composing from them.",
            "Keep the vocabulary small and business-shaped: viewer, editor, admin, billing. Model what the org chart calls people, not what the code calls tables. Resist per-resource roles until a real need appears — team-scoped roles are the most common premature complexity in RBAC designs, and half of them collapse into the ownership checks that Chapter 7 handles better.",
          ],
        },
        {
          heading: "Deny by default, audit everything",
          paragraphs: [
            "The default verdict is deny. An endpoint that forgets to call authorize() must fail closed, and the structure should make forgetting hard: middleware or a route wrapper that cannot proceed without a policy verdict. Explicit denies beat implicit allowances, and a policy nobody can read is a policy nobody trusts — render the role-to-permission map on a page; it is worth an afternoon.",
            "Log every deny with actor, action, resource and reason. Deny logs are your intrusion detector and your requirements gatherer at once: a spike of denies from a legitimate user means either an attack or a role missing one permission, and the log tells you which conversation to have. Access reviews become queries instead of archaeology.",
          ],
        },
      ],
      diagram: {
        kind: "layers",
        title: "The authorization stack",
        caption: "Everything above the bottom layer is data; only the decision point executes.",
        layers: [
          { label: "Request", note: "actor, action, resource" },
          { label: "authorize()", note: "the single decision point" },
          { label: "Roles", note: "named, business-shaped" },
          { label: "Permissions", note: "verbs on resources" },
          { label: "Resources", note: "what is actually touched" },
        ],
      },
      codeExample: {
        language: "ts",
        caption: "One decision point, declarative data, and every deny logged.",
        code: [
          "type Action = 'issue:read' | 'issue:write' | 'billing:manage';",
          "",
          "const rolePermissions: Record<string, Set<Action>> = {",
          "  viewer: new Set<Action>(['issue:read']),",
          "  editor: new Set<Action>(['issue:read', 'issue:write']),",
          "  admin:  new Set<Action>(['issue:read', 'issue:write', 'billing:manage']),",
          "};",
          "",
          "export function authorize(user: { roles: string[] }, action: Action): void {",
          "  const granted = user.roles.some((r) => rolePermissions[r]?.has(action));",
          "  if (!granted) {",
          "    auditLog.deny(user.id, action); // every deny is evidence",
          "    throw new ForbiddenError(action);",
          "  }",
          "}",
        ].join("\n"),
      },
      pitfalls: [
        {
          mistake: "Authorization checks scattered across controllers, services and templates.",
          fix: "One authorize() decision point called by every endpoint. Scattered checks are un-auditable and always drift out of sync.",
        },
        {
          mistake: "Trusting frontend route guards or hidden buttons as access control.",
          fix: "The server decides, always. Frontend hiding is polish for honest users; a crafted request bypasses it trivially.",
        },
        {
          mistake: "Creating a new role for every special case.",
          fix: "Fix the permission set instead. Role explosion means permissions hide inside roles instead of composing from data.",
        },
        {
          mistake: "Endpoints that default to allow when policy data is missing.",
          fix: "Fail closed. Missing role, unknown action or absent policy row must resolve to deny and be logged, never pass through.",
        },
      ],
      fieldChecklist: [
        "Every endpoint's authorization flows through one authorize() decision point.",
        "Roles and their permissions are queryable data, not code branches.",
        "A test matrix covers every endpoint against every role with expected verdicts.",
        "New endpoints cannot be registered without a policy check in place.",
        "Every deny is logged with actor, action, resource and reason.",
        "I can render the full role-to-permission map for a reviewer on request.",
      ],
      keyTerms: [
        {
          term: "RBAC",
          definition:
            "Role-based access control — users hold roles, roles hold permissions, endpoints demand permissions.",
        },
        {
          term: "Decision point",
          definition:
            "The single authorize() function every request passes through; the only place allow-or-deny is decided.",
        },
        {
          term: "Fail closed",
          definition:
            "Defaulting to deny when policy data is missing or the check cannot run — the only safe default for authorization.",
        },
        {
          term: "Role explosion",
          definition:
            "The proliferation of near-duplicate roles caused by hiding permissions inside roles instead of composing them from data.",
        },
      ],
      interviewQuestions: [
        {
          q: "How do you keep authorization from turning into spaghetti?",
          a: "One decision point and declarative data. Every endpoint calls the same authorize(actor, action, resource); roles and permissions live in queryable tables, not if-branches. A test matrix asserts every role against every endpoint, and deny logging tells me when real users are hitting walls. When policy is data, reviews are queries instead of code archaeology.",
        },
        {
          q: "When does RBAC stop being enough?",
          a: "When rules become object-shaped — she may edit issues in project twelve — RBAC starts accumulating exceptions, and that is the signal for attribute-based or relationship-based checks on top. I keep RBAC as the coarse layer and add ownership or team-scoped rules at the same decision point, rather than growing a second, competing system.",
        },
        {
          q: "A manager asks for admin, but without billing. How do you respond?",
          a: "I do not fork a new role. I split the permission set so billing:manage is its own verb, then either narrow the admin role or grant a second role that lacks billing. The request is usually a sign the permission granularity was wrong; the fix belongs in the data, visible to the next person who asks.",
        },
      ],
      quiz: [
        {
          question: "What is the non-negotiable property of the authorization design?",
          options: [
            "Roles stored in JWTs",
            "One decision point every endpoint calls",
            "Per-endpoint policy functions",
            "Client-side route guards",
          ],
          answerIndex: 1,
          explanation:
            "A single authorize() called everywhere keeps policy auditable and consistent. Scattered checks drift out of sync, and client-side guards never protect the API from crafted requests.",
        },
        {
          question: "The role-permission mapping is missing for a new action. The system should:",
          options: [
            "Allow and warn in logs",
            "Ask the user to confirm",
            "Deny and log the missing mapping",
            "Fall back to the closest role",
          ],
          answerIndex: 2,
          explanation:
            "Fail closed is the only safe direction for authorization. An unmapped action is a policy bug; deny plus a log turns it into a ticket instead of an incident.",
        },
        {
          question: "The team wants to give Maria's access to a new hire. Best response?",
          options: [
            "Assign the same roles, and add a role if the permission set is genuinely different",
            "Copy Maria's grants row by row",
            "Grant admin temporarily",
            "Ask Maria for her password",
          ],
          answerIndex: 0,
          explanation:
            "Copying grants multiplies unmanaged exceptions. Roles are the intended unit of assignment, and a genuinely new permission set deserves a visible, reviewable data change.",
        },
      ],
    },
    {
      number: 7,
      title: "Permissions",
      summary:
        "Roles are the nouns; permissions are the verbs. Get the verbs right and the system reads like the business runs.",
      keyIdea:
        "Object-level ownership is checked server-side in the decision point. Postgres row-level security is the seatbelt under the airbag.",
      deepDive: [
        {
          heading: "Verbs, and the objects they touch",
          paragraphs: [
            "Permissions are the verbs: issue:create, comment:delete, invoice:send. Roles bundle them; the decision point demands them. The craft is choosing verbs that match how the business talks — if support staff say they close a ticket, the permission is ticket:close, not generic write access to the tickets table. Boring, verbose permission names keep the policy legible to the people who own the process, not just the engineers who store it.",
            "The second half is the object. Deleting your own draft and deleting someone else's published report are different decisions wearing one permission name. Object-level checks — does this user own this row, belong to this team, hold this project role — run server-side inside the decision point, with the resource loaded and passed in. A permission that ignores its object is an invitation to horizontal privilege abuse: change the id in the URL and touch a neighbor's data.",
          ],
        },
        {
          heading: "Ownership in the query, not after it",
          paragraphs: [
            "The cheapest correct ownership check is in the query itself. A WHERE clause on owner id or membership returns the resource only if the actor is entitled to it, so there is no window between fetching and checking, and no code path that forgets the check. Fetch-then-verify is acceptable; fetch-and-hope is how broken-access-control bugs are born.",
            "Postgres row-level security is the seatbelt under the airbag: policies on the table enforce ownership even when application code forgets. Set a per-request user context and let the database refuse rows the actor cannot see. RLS is not a reason to skip application checks — it is the layer that makes one forgotten WHERE clause a non-event instead of a breach report.",
          ],
        },
        {
          heading: "Testing and reviewing access",
          paragraphs: [
            "Authorization bugs are quiet: everything works for the user who owns the data, and the failure only appears for the user who does not. Test the second user deliberately. For every object-level rule, write the negative case — the other team's member, the deleted account's token, the id from a different tenant — and assert the deny. Chapter 6's endpoint matrix extends naturally to object level here.",
            "Review cadence matters too. Object-level rules grow quietly as features ship, and who can see payroll data is a question a report answers better than a memory does. Generate the effective-permission report — role grants plus ownership rules — on a schedule, and walk it with the process owner. The report is short; the surprise it prevents is not.",
          ],
        },
      ],
      diagram: {
        kind: "compare",
        title: "Two ways to decide access",
        caption: "Coarse role checks pass every demo and fail the first changed URL id.",
        left: {
          heading: "Decision point + query checks",
          items: [
            "authorize() demands the verb",
            "Ownership filtered in the SQL WHERE clause",
            "Negative tests assert the other team is denied",
            "RLS enforces the same rule underneath",
          ],
        },
        right: {
          heading: "Checks scattered and shallow",
          items: [
            "Role checked in one controller, forgotten in another",
            "Object fetched first, ownership verified later — or never",
            "Tests only cover the happy owner",
            "IDOR lives one changed id away",
          ],
        },
      },
      pitfalls: [
        {
          mistake: "Checking the role but not the object — any id in the URL works.",
          fix: "Pass the loaded resource into the decision point and verify ownership or membership server-side. Horizontal access is the classic broken-access bug.",
        },
        {
          mistake: "Verifying ownership after fetching, in a branch some endpoints skip.",
          fix: "Filter in the query itself — WHERE owner_id = $1 — so an unauthorized row never leaves the database.",
        },
        {
          mistake: "Permission names so generic they fit everything: write, edit, manage.",
          fix: "Name verbs the way the business does: ticket:close, invoice:send. Legible names let process owners review policy unaided.",
        },
        {
          mistake: "No negative tests for object-level rules.",
          fix: "For every ownership rule, test the user who should be denied. Quiet authorization bugs only show for the second user.",
        },
      ],
      fieldChecklist: [
        "Every object-level decision happens server-side, with the resource passed to the decision point.",
        "Ownership filters live in the SQL, so unauthorized rows never reach application code.",
        "Row-level security or an equivalent database-side backstop is enabled on sensitive tables.",
        "Every ownership rule has a negative test asserting the denied user.",
        "Permission names read like the business speaks: ticket:close, not write:all.",
        "I can generate an effective-permission report for any object and walk it with its owner.",
      ],
      keyTerms: [
        {
          term: "Object-level check",
          definition:
            "An authorization decision about one specific row or resource — ownership, membership, project scope — not just the actor's role.",
        },
        {
          term: "Horizontal privilege abuse",
          definition:
            "Accessing a peer's data at the same privilege level by changing an id; the failure object-level checks exist to prevent.",
        },
        {
          term: "IDOR",
          definition:
            "Insecure direct object reference — trusting a client-supplied identifier without re-verifying entitlement to the object behind it.",
        },
        {
          term: "Row-level security",
          definition:
            "Postgres policies that filter rows by session context, enforcing ownership beneath application code.",
        },
      ],
      interviewQuestions: [
        {
          q: "Walk me through securing an endpoint that edits one resource.",
          a: "Authenticate, then authorize the verb through the decision point, then load the resource with ownership in the WHERE clause so only entitled rows return. If the row is absent or foreign, the response is identical: not found. The same rule is backstopped by row-level security, and a negative test proves another team's user gets the deny.",
        },
        {
          q: "How do you prevent IDOR systematically rather than endpoint by endpoint?",
          a: "Make entitled fetching the default path. Repositories take the actor and filter by ownership or membership in SQL; there is no fetch-by-bare-id function for sensitive objects. Row-level security underneath catches the day someone writes one anyway. Reviews then look for bare-id loads, and tests cover the cross-tenant case for every rule.",
        },
        {
          q: "Roles say she may edit issues. Why would you still deny a specific edit?",
          a: "Because the object changes the answer: the issue belongs to another team, is locked, or sits in an archived project. Coarse permissions answer what kinds of actions are possible; object-level rules answer whether this action touches this thing. Both run in the same decision point — role gate first, then ownership — and both are logged on deny.",
        },
      ],
      quiz: [
        {
          question: "The endpoint checks the editor role and then updates whatever id arrives. What is missing?",
          options: [
            "Rate limiting",
            "An object-level ownership check on the loaded resource",
            "A JWT refresh",
            "Input validation only",
          ],
          answerIndex: 1,
          explanation:
            "Role gates are coarse; the id chooses the victim. Load the resource with ownership in the query and verify entitlement server-side to stop horizontal privilege abuse.",
        },
        {
          question: "Why prefer ownership filters inside the SQL query?",
          options: [
            "SQL is faster than application code",
            "It avoids using an ORM",
            "The unauthorized row never leaves the database, so no code path can forget the check",
            "It replaces the need for roles",
          ],
          answerIndex: 2,
          explanation:
            "Fetch-then-verify leaves a window between read and check, and a branch someone will eventually forget. Filtering in the query makes entitlement part of retrieving the data at all.",
        },
        {
          question: "What does row-level security add on top of correct application checks?",
          options: [
            "Faster queries",
            "Automatic role assignment",
            "Encryption at rest",
            "A database-side backstop that enforces the same rules when application code forgets",
          ],
          answerIndex: 3,
          explanation:
            "RLS is the seatbelt under the airbag: database policies filter rows by session context, so one forgotten WHERE clause stays a non-event instead of a breach report.",
        },
      ],
    },
    {
      number: 8,
      title: "Two Factor Auth",
      summary:
        "Passwords are knowledge, and knowledge leaks. The second factor is possession — something the attacker must physically not have.",
      keyIdea: "TOTP for everyone, passkeys as the strategic direction. Recovery codes hashed at rest, single-use.",
      deepDive: [
        {
          heading: "Factors, honestly ranked",
          paragraphs: [
            "A second factor is a second category of evidence: knowledge (password), possession (phone, security key), inherence (biometric). Strength comes from independence — an attacker who phished your password still needs your device. The ranking in practice: WebAuthn passkeys and hardware keys are phishing-resistant; TOTP codes are strong against remote breaches and weak against real-time phishing; SMS is possession only technically — SIM swaps and number recycling make it the weakest second factor still called one.",
            "SMS still beats nothing, so enable it rather than gate 2FA on perfection. The strategy in 2026 is a ladder: offer TOTP to everyone from day one, promote passkeys as the strategic path, and keep SMS as a labeled fallback you never recommend. Measure which factor users actually enroll in — adoption, not availability, is the metric that moves account-takeover numbers.",
          ],
        },
        {
          heading: "TOTP, concretely",
          paragraphs: [
            "TOTP is a shared secret enrolled once — the QR code — with codes derived from that secret plus a thirty-second time step, six digits by default. Verification accepts the current step and usually one on either side for clock drift, and each code is single-use to stop replays inside the window. Store secrets like passwords: encrypted at rest, never logged, never re-shown after enrollment except deliberately.",
            "Recovery is where 2FA projects die. Enrolled users who lose devices must get back in, and an email link undoes the second factor entirely. Recovery codes — ten or so, hashed at rest like passwords, single-use, shown once at enrollment — are the standard answer. Also plan the unhappy path: support-assisted recovery with identity verification and a forced re-enrollment of the factor.",
          ],
        },
        {
          heading: "Make the second factor earn its keep",
          paragraphs: [
            "Prompting for a code on every login trains users to approve anything. Step up instead: require the second factor at sensitive moments — a new device, a password change, payout details, API key creation — and remember trusted devices for a bounded window of days. Step-up matches friction to risk and keeps support tickets near zero while the crown-jewel actions stay protected.",
            "Watch the quiet failure modes: codes accepted unlimited times inside their window, enrollment flows that log the QR secret to analytics, and account recovery that trusts caller ID. Each one converts two factors back into one without anything looking broken. Test your own recovery path the way an attacker would use it — it is the new front door you built on purpose.",
          ],
        },
      ],
      diagram: {
        kind: "pyramid",
        title: "Second factors, strongest at the top",
        caption: "Adoption beats perfection: promote the top tier, keep the ladder below it.",
        tiers: [
          { label: "Passkeys / hardware keys", note: "phishing-resistant possession" },
          { label: "TOTP app codes", note: "strong but phishable live" },
          { label: "SMS codes", note: "SIM-swap weak, beats none" },
          { label: "Password alone", note: "knowledge that leaks" },
        ],
      },
      codeExample: {
        language: "ts",
        caption: "TOTP verification with single-use enforcement — codes never replay.",
        code: [
          "import { authenticator } from 'otplib';",
          "",
          "export async function enroll(userId: string) {",
          "  const secret = authenticator.generateSecret();",
          "  await vault.storeTotpSecret(userId, secret); // encrypted at rest",
          "  return authenticator.keyuri(userId, 'MyApp', secret); // shown once",
          "}",
          "",
          "export async function verifyTotp(userId: string, token: string) {",
          "  const secret = await vault.loadTotpSecret(userId);",
          "  const ok = authenticator.check(token, secret); // ±1 time step",
          "  if (ok) await usedCodes.markConsumed(userId, token); // single-use",
          "  return ok;",
          "}",
        ].join("\n"),
      },
      pitfalls: [
        {
          mistake: "Storing TOTP secrets or recovery codes in plaintext.",
          fix: "Encrypt secrets at rest and hash recovery codes like passwords. Whoever reads your database must not inherit your users' second factors.",
        },
        {
          mistake: "Recovery that emails a magic link past the second factor.",
          fix: "Use hashed, single-use recovery codes shown once at enrollment, plus support recovery with identity proof and forced re-enrollment.",
        },
        {
          mistake: "Recommending SMS as the default second factor.",
          fix: "Offer TOTP and passkeys first; keep SMS as a labeled fallback. SIM swaps and recycled numbers make SMS the weakest possession factor.",
        },
        {
          mistake: "Accepting the same TOTP code repeatedly inside its window.",
          fix: "Consume each code on use. A code that replays converts the time factor into a reusable password.",
        },
      ],
      fieldChecklist: [
        "TOTP enrollment is available to every user, with secrets encrypted at rest.",
        "Recovery codes are hashed, single-use, shown exactly once at enrollment.",
        "The second factor is required at step-up moments: new device, password change, payouts.",
        "Passkeys are the promoted path; SMS is offered but never recommended.",
        "Trusted devices expire on a fixed window, not forever.",
        "I have walked my own recovery path as an attacker would.",
      ],
      keyTerms: [
        {
          term: "TOTP",
          definition:
            "Time-based one-time password — six digits derived from a shared secret and a thirty-second step, verified with one step of drift.",
        },
        {
          term: "Possession factor",
          definition:
            "Evidence the user holds a device or key, not a secret they can be tricked into typing anywhere.",
        },
        {
          term: "Recovery codes",
          definition:
            "Hashed, single-use backup credentials generated at 2FA enrollment — the honest alternative to recovery links that undo the factor.",
        },
        {
          term: "SIM swap",
          definition:
            "An attack that transfers a victim's phone number to an attacker's SIM, defeating SMS codes.",
        },
      ],
      interviewQuestions: [
        {
          q: "How do you roll out 2FA without drowning support?",
          a: "Make it optional but visible, TOTP first, with hashed single-use recovery codes generated at enrollment. Reserve mandatory challenges for step-up moments — new devices and sensitive changes — and remember trusted devices for a bounded window. The combination keeps adoption meaningful and support tickets rare, because users are challenged when risk is real, not on every login.",
        },
        {
          q: "Is SMS 2FA worth enabling at all?",
          a: "Yes, as a labeled fallback, because it blocks the bulk of opportunistic takeovers from stolen-password dumps. But never recommend it: SIM swaps and recycled numbers defeat it, and attackers increasingly route around it. Promote TOTP and passkeys in the enrollment UI, watch what users choose, and treat SMS adoption as a trailing indicator, not a success.",
        },
        {
          q: "A user lost their phone with TOTP and has no recovery codes. What now?",
          a: "A deliberate, slower path: identity verification through support, a forced re-enrollment of the second factor, and revocation of all active sessions once restored. I also look for signals the requester is legitimate — recent activity, billing history — and I log the whole event. Friction here is correct; this flow is the account's emergency exit.",
        },
      ],
      quiz: [
        {
          question: "What makes WebAuthn passkeys stronger than TOTP codes?",
          options: [
            "Longer secrets",
            "They are phishing-resistant because they are bound to the origin",
            "They never require a device",
            "They work without enrollment",
          ],
          answerIndex: 1,
          explanation:
            "A passkey only signs challenges for the site that enrolled it, so a fake site gets a signature the real site rejects. TOTP codes can be phished in real time.",
        },
        {
          question: "A user enrolls TOTP. What must accompany it at enrollment?",
          options: [
            "SMS backup automatically",
            "A printed QR copy in the mail",
            "Hashed, single-use recovery codes shown once",
            "Nothing — the secret is enough",
          ],
          answerIndex: 2,
          explanation:
            "Lost devices are certain, and recovery codes are the honest path back in. An email link would undo the second factor you just added, restoring single-factor login.",
        },
        {
          question: "Why step-up prompts instead of a code on every login?",
          options: [
            "It reduces server load",
            "TOTP codes are expensive to generate",
            "Compliance requires it",
            "Risk is uneven; matching friction to sensitive moments keeps adoption high and prompts meaningful",
          ],
          answerIndex: 3,
          explanation:
            "Constant prompts train users to approve blindly. Step-up challenges new devices and sensitive actions instead, reserving the second factor for moments where it actually changes the outcome.",
        },
      ],
    },
    {
      number: 9,
      title: "Password Reset Flow",
      summary:
        "The password reset is the back door you built on purpose. Attackers do not need to break your login if your reset flow is a trusting one.",
      keyIdea: "Reset tokens are 256-bit, hashed, single-use, short-lived. Uniform response regardless of account existence.",
      deepDive: [
        {
          heading: "The back door you built on purpose",
          paragraphs: [
            "Password reset exists because humans forget, and it is the one flow that mints credentials without a password. Attackers know it: reset flows leak accounts through token guessing, token theft, response differences and mailbox compromise. Design it as if the internet will read your spec — eventually someone will, and the details decide whether forgot-password means regain access or take over an account.",
            "The token is the whole game. Generate it with a CSPRNG at 256 bits — 32 raw bytes — so enumeration is not even a fantasy. Store only its hash, exactly like a password, so a database leak yields no working reset links. Bind it to one use and a short life: fifteen to sixty minutes is typical, and it dies the moment it succeeds.",
          ],
        },
        {
          heading: "Uniform responses, non-uniform attackers",
          paragraphs: [
            "Every response to a reset request looks identical whether or not the account exists — same status code, same message, same timing. Enumeration is the quiet goal of reset probes: harvest which emails are registered, then target them elsewhere. Rate limit by IP and by destination address, and throttle email sending at the provider too, because that is where bulk abuse shows up first.",
            "One deliberate exception exists, on purpose and openly: some teams notify the registered address that a reset was requested for that account. It is a useful anti-enumeration signal with a trade-off — an attacker can harass a victim with repeated probes — so pair it with strict per-address limits. Whatever you choose, write the policy down; improvised inconsistencies are exactly what attackers map.",
          ],
        },
        {
          heading: "After the reset lands",
          paragraphs: [
            "A successful reset is a credential event: revoke every existing session and refresh family, re-enroll anything tied to old credentials, and hold the new password to the same strength and breach-list checks as signup. The link itself must die on use — a reusable reset link is a persistent back door. Log the event with context so a user can contest a reset they did not perform.",
            "The email is part of the threat model. Mail clients prefetch URLs, so make the token single-use and short-lived enough that prefetch rot cannot consume it, and prefer a click-through confirmation over an auto-consuming link. And the reset page authenticates on the token alone — no assumptions about existing sessions, no shortcuts for anyone who shows up with the right address.",
          ],
        },
      ],
      diagram: {
        kind: "flow",
        title: "A reset that cannot be farmed",
        caption: "The token is hashed and single-use — the email becomes a dead link the moment it works.",
        steps: [
          { label: "Request", note: "uniform response, rate limited" },
          { label: "Mint token", note: "256-bit CSPRNG" },
          { label: "Store hash", note: "never the raw token" },
          { label: "Email link", note: "short TTL, single use" },
          { label: "Reset + revoke", note: "kill all sessions" },
        ],
      },
      codeExample: {
        language: "ts",
        caption: "256-bit token, stored hashed, uniform response when the account is absent.",
        code: [
          "import { randomBytes, createHash } from 'crypto';",
          "",
          "export async function requestReset(email: string) {",
          "  const user = await db.user.findByEmail(email);",
          "  if (!user) return respondUniform(); // identical shape and timing",
          "  const raw = randomBytes(32).toString('base64url'); // 256 bits",
          "  const hash = createHash('sha256').update(raw).digest('hex');",
          "  await db.resetTokens.create({",
          "    data: { userId: user.id, hash, expiresAt: inMinutes(30) },",
          "  });",
          "  await mailer.sendReset(user.email, raw); // emailed once, never stored raw",
          "}",
        ].join("\n"),
      },
      pitfalls: [
        {
          mistake: "Revealing whether an account exists in the reset flow.",
          fix: "Uniform response, uniform timing, limits by IP and address. Enumeration is the cheapest reconnaissance there is.",
        },
        {
          mistake: "Reset tokens stored in plaintext or reused after success.",
          fix: "Hash at rest like passwords, single-use on success, TTL of fifteen to sixty minutes. A reusable token is a standing back door.",
        },
        {
          mistake: "Reset succeeds but old sessions survive.",
          fix: "Revoke every session and refresh family on success. A thief holding a session must not outlive the new password.",
        },
        {
          mistake: "Tokens short enough or guessable enough to brute force.",
          fix: "256 bits from a CSPRNG. Anything shorter turns the reset link into a lottery ticket you mailed to strangers.",
        },
      ],
      fieldChecklist: [
        "Reset tokens are 256-bit CSPRNG values, hashed at rest.",
        "Tokens are single-use and expire within an hour.",
        "Responses are uniform in status, body and timing regardless of account existence.",
        "A successful reset revokes all sessions and refresh families for the account.",
        "Reset requests are rate limited by IP and by destination address.",
        "I have tested enumeration, reuse and replay against my own flow.",
      ],
      keyTerms: [
        {
          term: "Reset token",
          definition:
            "A 256-bit, single-use, short-lived credential that authorizes one password change; stored hashed like a password.",
        },
        {
          term: "User enumeration",
          definition:
            "Learning which emails are registered through response differences; the recon step that feeds targeted attacks.",
        },
        {
          term: "Single-use",
          definition:
            "Consumed permanently on first success — the property that turns a leaked link into a dead link.",
        },
        {
          term: "Timing uniformity",
          definition:
            "Responding in the same shape and duration whether or not the account exists, so behavior cannot leak existence.",
        },
      ],
      interviewQuestions: [
        {
          q: "Design a password reset flow for me.",
          a: "The request endpoint accepts any address and answers identically, rate limited by IP and destination. For real accounts it mints a 256-bit token, stores only its hash with a thirty-minute TTL, and emails a link. The reset page authenticates on the token alone; success consumes it, revokes all sessions, and applies normal password policy. Notify the registered address that a change happened.",
        },
        {
          q: "Why hash reset tokens if they expire in thirty minutes?",
          a: "Because a database dump does not respect TTLs. Hashed tokens mean a leak yields nothing usable, while plaintext tokens become thousands of working reset links for as long as any remain live. Passwords get this treatment for the same reason: anything that alone grants access is a credential, and credentials are stored digested.",
        },
        {
          q: "How do you stop reset flows being used to harass a user?",
          a: "Rate limits per destination address and per IP, plus a cap on emails per account per day. The optional reset-was-requested notification is useful anti-enumeration feedback, but it is exactly what an abuser would spam, so it obeys the same throttles. Monitoring flags address-heavy probing patterns for review.",
        },
      ],
      quiz: [
        {
          question: "What property most stops brute forcing reset tokens?",
          options: [
            "Base64 encoding",
            "256 bits of CSPRNG entropy with a short TTL",
            "Email delivery delays",
            "HTTPS",
          ],
          answerIndex: 1,
          explanation:
            "Enumeration needs a small keyspace and time. 256 random bits remove the keyspace, and a short time-to-live removes the time — brute force stops being a strategy.",
        },
        {
          question: "The reset request returns user-not-found for unknown emails. Consequence?",
          options: [
            "Faster responses",
            "Better error metrics",
            "Attackers harvest registered addresses, then target them elsewhere",
            "None — errors are informative",
          ],
          answerIndex: 2,
          explanation:
            "Enumeration is cheap reconnaissance that feeds targeted attacks. Uniform responses and timing keep the flow blind, and rate limits make probing expensive enough that attackers move on.",
        },
        {
          question: "A reset succeeds. What must happen immediately?",
          options: [
            "Nothing — the password changed",
            "The old password still works for a day",
            "The user is logged out for 24 hours as punishment",
            "All sessions and refresh tokens are revoked",
          ],
          answerIndex: 3,
          explanation:
            "A reset is a credential event. Anyone already holding a session or a refresh family must lose it in the same moment, or the new password protects nothing the attacker cares about.",
        },
      ],
    },
    {
      number: 10,
      title: "Login Rate Limits",
      summary:
        "Your login endpoint is a guessing game you published to the internet. Rate limiting is the rules of engagement.",
      keyIdea: "Layered limits with shared state (Redis or edge). Backoff + CAPTCHA instead of hard lockout; victim-DoS tested.",
      deepDive: [
        {
          heading: "A guessing game you published",
          paragraphs: [
            "An unlimited login endpoint is a password oracle: credential stuffing replays millions of leaked email-password pairs against you at machine speed. The defense is layered limits with shared state — per IP, per account, per stuffing fingerprint — held in Redis or at the edge so every instance sees the same counters. In-memory counters per pod are theater: attackers rotate across your fleet and every pod starts them fresh.",
            "Layer the dimensions because each alone is too weak or too blunt. Per-IP catches naive scripts but folds to botnets; per-account stops single-victim targeting but punishes shared offices; per-ASN and per-fingerprint catch distributed stuffers. Combine them, weight by reputation, and put the strictest limits on the endpoints that mint credentials: login, signup, password reset.",
          ],
        },
        {
          heading: "Backoff and CAPTCHA, not lockout",
          paragraphs: [
            "Hard account lockout after N failures is the classic mistake: it hands attackers a denial-of-service weapon against anyone whose email they know. Prefer exponential backoff — a few seconds doubling after failures — then a CAPTCHA or proof-of-work challenge for sustained abuse, then step-up authentication. Temporary lockouts with automatic expiry are acceptable for targeted abuse, announced to the real owner through the registered channel.",
            "CAPTCHAs are a speed bump with a shelf life — solvers exist — so treat them as one layer, not the wall. The modern complement is risk signals: device reputation, impossible travel between attempts, and matches against known breach corpora. A login that looks like the owner gets through; one that looks like a stuffer meets friction tuned to the risk.",
          ],
        },
        {
          heading: "Test the victim path",
          paragraphs: [
            "Every limiter is also a potential weapon against your own users, so test the victim-DoS scenario before an attacker runs it for you: how many requests from one address before a NAT'd office feels it, how a targeted user experiences a stalking campaign, whether support can tell attack traffic from a forgotten password. Limits without an escape hatch just move the incident to your inbox.",
            "Monitor what the limits see. Failure-rate spikes by account, network and fingerprint are your earliest account-takeover radar and your evidence for tuning thresholds. Log decisions, not just denials: challenged with CAPTCHA and allowed after backoff are signals worth graphing. A limiter nobody looks at is a limiter the attacker has already profiled.",
          ],
        },
      ],
      diagram: {
        kind: "layers",
        title: "The friction stack at login",
        caption: "Shared state makes the layers global; backoff keeps the victim's path alive.",
        layers: [
          { label: "Edge / CDN limit", note: "absorb floods first" },
          { label: "Per-IP and per-ASN", note: "shared Redis counters" },
          { label: "Per-account backoff", note: "slow, never hard-lock" },
          { label: "CAPTCHA / challenge", note: "sustained abuse only" },
          { label: "Step-up auth", note: "risk-based second factor" },
        ],
      },
      codeExample: {
        language: "ts",
        caption: "Shared Redis counters make the rate limit global across every instance.",
        code: [
          "import Redis from 'ioredis';",
          "const redis = new Redis(process.env.REDIS_URL!);",
          "",
          "// Fixed-window counters, shared across every instance",
          "export async function tooManyAttempts(ip: string, email: string) {",
          "  const hour = Math.floor(Date.now() / 3_600_000);",
          "  const perIp = await redis.incr(`rl:${ip}:${hour}`);",
          "  const perAcct = await redis.incr(`rl:acct:${email}:${hour}`);",
          "  if (perIp === 1) await redis.expire(`rl:${ip}:${hour}`, 3600);",
          "  if (perAcct === 1) await redis.expire(`rl:acct:${email}:${hour}`, 3600);",
          "  return perIp > 20 || perAcct > 10; // tune per surface",
          "}",
        ].join("\n"),
      },
      pitfalls: [
        {
          mistake: "Rate limits stored in each instance's memory.",
          fix: "Shared state — Redis or edge counters — or attackers rotate across your fleet and every pod grants a fresh budget.",
        },
        {
          mistake: "Hard lockout after N failed logins.",
          fix: "Exponential backoff plus challenges instead. Lockout converts a password guesser into a one-email denial-of-service cannon.",
        },
        {
          mistake: "One limit dimension, usually IP, and nothing else.",
          fix: "Layer per-IP, per-account, per-ASN and fingerprint signals. Botnets defeat single-dimension limits in minutes.",
        },
        {
          mistake: "Never testing the victim path.",
          fix: "Run the targeted-harassment scenario yourself: backoff curves, support visibility, an expedited verified unlock. A limiter is a weapon until proven otherwise.",
        },
      ],
      fieldChecklist: [
        "Login, signup and reset share strict, layered limits with shared counters.",
        "Counters live in Redis or at the edge, visible to every instance.",
        "Backoff and challenges replace hard lockout; temporary locks expire on their own.",
        "Victim-DoS is tested: one user, targeted, still has a working (slow) path.",
        "Failure spikes by account, network and fingerprint are monitored and alerted.",
        "Limit decisions — allowed, backoff, challenged, denied — are logged, not just enforced.",
      ],
      keyTerms: [
        {
          term: "Credential stuffing",
          definition:
            "Replaying leaked email-password pairs against your login at scale; the attack layered rate limits exist to price out.",
        },
        {
          term: "Exponential backoff",
          definition:
            "Increasing delay after consecutive failures — friction that scales with abuse while leaving a slow path for the real owner.",
        },
        {
          term: "Sliding window",
          definition:
            "A rate-limit window that counts continuously rather than resetting at fixed boundaries, smoothing bursts.",
        },
        {
          term: "Victim DoS",
          definition:
            "Weaponizing your own limits against a known user — the failure mode hard lockout invites.",
        },
      ],
      interviewQuestions: [
        {
          q: "How do you rate limit login without locking out legitimate users?",
          a: "Layered limits with shared state, and backoff instead of lockout. Per-IP and per-account counters in Redis, exponential delays after failures, then CAPTCHA or step-up for sustained abuse. A targeted user experiences slower logins, never a wall, and support sees the pattern in logs. I also cap emails per account so the limits cannot be aimed at a victim.",
        },
        {
          q: "Where does the state for distributed rate limiting live?",
          a: "Somewhere every instance already shares: Redis with atomic increments and TTLs, or edge-native counters at the CDN. The key is one global view per dimension — IP, account, network — so rotating across pods buys an attacker nothing. Local memory is fine only for best-effort shields; correctness needs the shared store.",
        },
        {
          q: "Your login failures spike 40x overnight. What do you look at first?",
          a: "Shape, not just volume. One account failing from many addresses means targeting; one network across many accounts means a stuffer; many accounts with a single password each suggests a dump hit our domain. Then I check what the limiters did — challenged, throttled, allowed — and tighten the dimension that matches the shape rather than tightening everything.",
        },
      ],
      quiz: [
        {
          question: "Why is per-instance in-memory rate limiting ineffective?",
          options: [
            "It is slower than Redis",
            "Attackers rotate across instances, and each pod starts with a fresh budget",
            "Memory limits are too small",
            "It double-counts requests",
          ],
          answerIndex: 1,
          explanation:
            "Limits only bind when every instance sees the same counters. Shared state in Redis or at the edge makes the budget global, so rotating across pods buys an attacker nothing.",
        },
        {
          question: "A stalker knows a victim's email. Why is hard lockout dangerous here?",
          options: [
            "It uses more database connections",
            "Lockouts expire too fast",
            "It lets the stalker keep the victim permanently logged out — DoS by lockout",
            "It logs too much data",
          ],
          answerIndex: 2,
          explanation:
            "The stalker fails N logins deliberately and the account freezes for the real owner. Backoff and challenges keep the victim's path alive instead of weaponizing the limiter.",
        },
        {
          question: "What is the role of CAPTCHA in a login defense?",
          options: [
            "The primary security wall",
            "A replacement for password checks",
            "A logging mechanism",
            "One friction layer among several, with a known shelf life",
          ],
          answerIndex: 3,
          explanation:
            "Solvers erode CAPTCHAs over time, so it is a speed bump, not the wall. The durable defense is layered limits plus risk signals tuned to the traffic.",
        },
      ],
    },
    {
      number: 11,
      title: "OIDC vs OAuth 2.0 & PKCE Flow",
      summary:
        "OAuth answers 'what may this app do?' OIDC answers 'who is this user?' One protocol, one layer apart — and PKCE is the modern lock on both.",
      keyIdea:
        "Authentication uses OIDC ID tokens; API access uses OAuth access tokens. PKCE on every authorization code flow.",
      deepDive: [
        {
          heading: "One layer apart",
          paragraphs: [
            "OAuth 2.0 is a delegation protocol: it gets an app authorized access to an API. OpenID Connect is a thin identity layer on top of OAuth: same flows, one extra token — the ID token — whose subject claim says who the user is. The clean sentence worth memorizing: OAuth answers what may this app do; OIDC answers who is this user. Systems that blur the two end up accepting access tokens as login proof, which is Chapter 4's takeover bug.",
            "The ID token is a JWT signed by the provider, and it is for your app alone: verify the signature against the provider's JWKS, then audience — it must be your client id — issuer, expiry, and the nonce you sent with the authorization request. The nonce binds the token to this specific login attempt, which is what stops a stolen response being replayed as someone else's sign-in.",
          ],
        },
        {
          heading: "PKCE, the modern lock",
          paragraphs: [
            "PKCE — proof key for code exchange — closes the code-interception hole. The client generates a random code_verifier, sends a derived challenge with the authorization request, and presents the original verifier at the token exchange. A thief who lifted the code from a redirect cannot exchange it without the verifier, which never left the client. OAuth 2.1 makes PKCE mandatory for every authorization code flow, public and confidential alike.",
            "The discipline is cheap: S256 challenge method, 32 random bytes of verifier, verify at exchange. What PKCE does not do is substitute for server-side token handling — it protects the code in transit, not your storage of the tokens afterward. Confidential clients still exchange from the backend; public clients still keep refresh tokens out of localStorage per Chapter 12.",
          ],
        },
        {
          heading: "Choosing tokens per purpose",
          paragraphs: [
            "Use each token for its purpose: ID tokens prove identity at sign-in and are then stored, not replayed against APIs; access tokens authorize API calls and are never read as identity; refresh tokens obtain new pairs. Mixing them is how a token minted for one audience gets accepted by a service that never checked. Audience separation is what keeps the payments token from opening the admin panel.",
            "Operate discovery and rotation properly. Fetch the provider's discovery document once to wire endpoints from configuration instead of hardcoded URLs, cache JWKS with a refresh on an unknown key id, and plan for provider downtime the way Chapter 5 does. When a new integration arrives, the review question is always the same: which token, which audience, verified how?",
          ],
        },
      ],
      diagram: {
        kind: "flow",
        title: "OIDC login with PKCE",
        caption: "PKCE binds the code to the client that started it; the nonce binds the ID token to this login.",
        steps: [
          { label: "Make verifier", note: "32 random bytes, kept private" },
          { label: "Authorize", note: "challenge, nonce, openid" },
          { label: "Provider login", note: "user authenticates" },
          { label: "Callback code", note: "single-use, bound to challenge" },
          { label: "Exchange", note: "code + verifier, server-side" },
          { label: "ID token", note: "verify aud, nonce, iss" },
        ],
      },
      pitfalls: [
        {
          mistake: "Accepting an OAuth access token as proof of identity.",
          fix: "Identity is the OIDC ID token: verify signature, audience equal to your client id, issuer, expiry and nonce before trusting sub.",
        },
        {
          mistake: "Skipping nonce validation on ID tokens.",
          fix: "Generate a nonce per login attempt and verify it in the returned token. Without it, a captured response replays as a sign-in.",
        },
        {
          mistake: "Treating PKCE as unnecessary for confidential clients.",
          fix: "OAuth 2.1 requires PKCE on every authorization code flow. It is one random string and one hash — send it everywhere.",
        },
        {
          mistake: "Using the ID token as an API credential.",
          fix: "ID tokens prove identity to your app; access tokens authorize API calls to their audience. Never let one do the other's job.",
        },
      ],
      fieldChecklist: [
        "Sign-in verifies the ID token's signature, audience, issuer, expiry and nonce.",
        "PKCE with S256 is on every authorization code flow, including server-side clients.",
        "Access tokens are checked for audience and never used as identity.",
        "Endpoints come from the discovery document, not hardcoded URLs.",
        "JWKS is cached and refreshes on an unknown key id.",
        "I can state, per token type, what it proves and who its audience is.",
      ],
      keyTerms: [
        {
          term: "OIDC",
          definition:
            "OpenID Connect — an identity layer over OAuth 2.0 that adds ID tokens so apps can verify who the user is.",
        },
        {
          term: "ID token",
          definition:
            "A JWT from the provider asserting the user's identity to your client alone; verified for audience, issuer, expiry and nonce.",
        },
        {
          term: "nonce",
          definition:
            "A per-login random value echoed inside the ID token, binding it to one authorization attempt and defeating replay.",
        },
        {
          term: "PKCE",
          definition:
            "Proof key for code exchange — a verifier/challenge pair that binds an authorization code to the client that requested it.",
        },
      ],
      interviewQuestions: [
        {
          q: "In one breath: OIDC versus OAuth 2.0?",
          a: "OAuth 2.0 is delegation — it answers what this app may do to an API on the user's behalf. OIDC sits one layer on top and answers who the user is, via an ID token your client verifies. Login is OIDC; API access is OAuth. The bugs come from mixing them, which is why audience checks exist.",
        },
        {
          q: "What exactly does PKCE add, and what does it not?",
          a: "It binds the authorization code to the client that started the flow: a random verifier, a derived challenge sent up front, the verifier proven at exchange. Intercepted codes become worthless. It does not protect tokens after issuance — storage, rotation and revocation remain your problem, which is why Chapters 12 and 13 still apply.",
        },
        {
          q: "Why verify the nonce and audience on an ID token that already has a good signature?",
          a: "Signature proves the provider minted the token, not that it was minted for you or for this login. Audience must equal your client id or the token belongs to another app; nonce must match the value your authorization request sent or the token may be a replayed response. Both checks are the difference between authentication and wishful thinking.",
        },
      ],
      quiz: [
        {
          question: "Which token proves who the user is?",
          options: [
            "The OAuth access token",
            "The OIDC ID token, after verifying audience and nonce",
            "The refresh token",
            "The state parameter",
          ],
          answerIndex: 1,
          explanation:
            "ID tokens carry identity claims for your client's audience and are verified accordingly. Access tokens authorize API calls and are meaningless as proof of who the user is.",
        },
        {
          question: "What does PKCE prevent?",
          options: [
            "Token theft from localStorage",
            "Brute forcing passwords",
            "Exchanging an intercepted authorization code without the verifier",
            "ID token tampering",
          ],
          answerIndex: 2,
          explanation:
            "The code alone is worthless without the verifier, which never leaves the client. That closes the redirect-interception hole that made implicit flows and bare code exchanges dangerous.",
        },
        {
          question: "The nonce check exists because:",
          options: [
            "Providers require randomness for load balancing",
            "It encrypts the token payload",
            "It shortens the token lifetime",
            "It binds the ID token to one specific login attempt, defeating response replay",
          ],
          answerIndex: 3,
          explanation:
            "A signed ID token can still be a stolen response. Matching the nonce your request sent proves the token answers this attempt, not an old one being replayed.",
        },
      ],
    },
    {
      number: 12,
      title: "HttpOnly, Secure, SameSite Cookies & Token Storage Risks",
      summary:
        "A token's security is decided less by its crypto than by where it sleeps. localStorage is the most dangerous hotel in web security.",
      keyIdea: "Refresh in HttpOnly cookie, access in memory only. Never in localStorage or sessionStorage.",
      deepDive: [
        {
          heading: "Where tokens sleep",
          paragraphs: [
            "Tokens are stolen from storage far more often than from crypto. localStorage is the worst address: readable by every script on the page, it hands any XSS — a compromised npm dependency, a rogue analytics tag, a user-installed extension — the full credential set, and the token persists after the tab closes. sessionStorage is the same hole with a shorter memory. Memory-only variables die with the page and are invisible to other tabs; cookies live in the browser's jar, governed by attributes rather than scripts.",
            "The pairing that works: refresh token in an HttpOnly, Secure, SameSite cookie scoped to the auth path, access token held in memory only, fetched silently from the refresh endpoint on load. JavaScript never touches the refresh token; the access token's short life bounds what a stolen memory copy is worth. SPAs in 2026 with backends-for-frontend or Auth.js-style session handling converge on exactly this shape.",
          ],
        },
        {
          heading: "The cookie attributes, precisely",
          paragraphs: [
            "HttpOnly removes the cookie from JavaScript's view — the XSS bug cannot read it, though the browser still sends it. Secure keeps it off plain HTTP, which matters because one open Wi-Fi network downgrades nothing if the cookie refuses to travel. SameSite=Lax attaches the cookie to same-site requests and safe top-level navigations, blunting CSRF; Strict is tighter and breaks some inbound-link flows; None requires Secure and is for genuine cross-site integrations only.",
            "Add the attributes people forget. The __Host- prefix forces Secure, path=/, and no domain attribute — a cookie that cannot be re-scoped by a subdomain compromise. Path=/auth/refresh keeps the token off every other request the app makes. Expiry needs thought too: session cookies die with the browser, and persistent ones need the rotation discipline of Chapter 13 to stay safe.",
          ],
        },
        {
          heading: "The trade-offs, stated honestly",
          paragraphs: [
            "Cookies bring CSRF back into scope, because the browser attaches them automatically; SameSite plus CSRF tokens on state-changing cross-site flows handle it, and the attack is far easier to contain than XSS theft. Cookies also mean server-side session or refresh state, which Chapters 1 and 3 already priced. The alternative — bearer tokens in JavaScript storage — buys simple API calls at the cost of putting every credential one script error away from exfiltration.",
            "For mobile and CLI clients there is no browser jar: use the platform's secure storage — iOS Keychain, Android Keystore, OS credential vaults — and never file-based config with plaintext tokens. Whatever the surface, the audit question is identical: name every place a credential rests, who can read it, and how fast it rotates. If the answer includes localStorage, the answer is wrong.",
          ],
        },
      ],
      diagram: {
        kind: "compare",
        title: "Where the token sleeps",
        caption: "Crypto rarely loses the token; the storage jar does.",
        left: {
          heading: "Cookie jar and memory",
          items: [
            "Refresh in HttpOnly, Secure, SameSite cookie",
            "Access token in memory only, short TTL",
            "XSS cannot read the refresh credential",
            "CSRF handled by SameSite and tokens",
          ],
        },
        right: {
          heading: "Web storage, never",
          items: [
            "localStorage readable by every script",
            "One compromised dependency drains all tokens",
            "Tokens persist after the tab closes",
            "Extensions and devtools see everything",
          ],
        },
      },
      codeExample: {
        language: "ts",
        caption: "The refresh cookie JavaScript cannot read, scoped to the auth path.",
        code: [
          "// Refresh token cookie: unreachable from JavaScript, scoped tight",
          "res.cookie('refresh', rotatedToken, {",
          "  httpOnly: true,                // no document.cookie access",
          "  secure: true,                  // HTTPS only",
          "  sameSite: 'lax',               // blunt CSRF",
          "  path: '/auth',                 // sent only to auth endpoints",
          "  maxAge: 14 * 24 * 3600 * 1000, // two weeks, rotated on use",
          "  signed: true,",
          "});",
          "",
          "// The __Host- prefix is stricter still: it forces Secure,",
          "// path=/, and no domain attribute — subdomains cannot re-scope it.",
        ].join("\n"),
      },
      pitfalls: [
        {
          mistake: "Access or refresh tokens in localStorage because the SPA needs them.",
          fix: "Refresh in an HttpOnly cookie and keep the access token in memory, re-fetched on load. Any script on the page reads localStorage.",
        },
        {
          mistake: "SameSite=None on every cookie for convenience.",
          fix: "Default to Lax; use None only for genuine cross-site integrations, always with Secure. None-everywhere reintroduces CSRF across the app.",
        },
        {
          mistake: "Missing the Secure flag in staging, then everywhere.",
          fix: "Set Secure from the first deploy and test on HTTPS only. The HTTP copy of a cookie is the copy attackers meet first.",
        },
        {
          mistake: "Long-lived bearer tokens in mobile plaintext config files.",
          fix: "Use the iOS Keychain or Android Keystore, rotate on use, revoke on device loss. Plaintext files are readable on any rooted device.",
        },
      ],
      fieldChecklist: [
        "Refresh tokens live in HttpOnly, Secure, SameSite=Lax cookies, path-scoped to auth.",
        "Access tokens exist in memory only and die with the page.",
        "No credential is written to localStorage or sessionStorage anywhere in the codebase.",
        "A lint or CI rule blocks new localStorage token writes.",
        "Mobile clients use the platform keystore, never plaintext files.",
        "I can name every place a credential rests in this system and its rotation speed.",
      ],
      keyTerms: [
        {
          term: "HttpOnly",
          definition:
            "The cookie attribute hiding it from JavaScript, so an XSS cannot read the credential even while the browser still sends it.",
        },
        {
          term: "SameSite",
          definition:
            "The attribute governing cross-site cookie attachment — Lax blunts CSRF, None disables that protection, Strict is tightest.",
        },
        {
          term: "Token storage surface",
          definition:
            "Where a credential rests: cookie jar, memory, web storage, or platform keystore — the first thing an attacker maps.",
        },
        {
          term: "Bearer token",
          definition:
            "A credential presented as-is by whoever holds it; no proof of possession, so its storage location is its security.",
        },
      ],
      interviewQuestions: [
        {
          q: "An SPA needs to call APIs. Where do tokens go?",
          a: "Refresh token in an HttpOnly, Secure, SameSite cookie scoped to the auth path; access token in memory only, silently refreshed on load and after expiry. JavaScript never touches the long-lived credential, so XSS cannot drain it. localStorage is the one answer I reject outright — a single compromised dependency exfiltrates everything stored there.",
        },
        {
          q: "Do cookies not reintroduce CSRF?",
          a: "They reintroduce the attack, not the risk, when handled: SameSite=Lax stops most cross-site attachment, and state-changing cross-site flows keep CSRF tokens or require same-site fetches. I would rather defend a bounded CSRF surface than store a thirty-day refresh token in JavaScript-readable storage where one XSS ends the account.",
        },
        {
          q: "A teammate stores the access token in sessionStorage, saying it clears on close. Response?",
          a: "Clearing on close changes nothing about the threat: any script running while the tab is open reads it, which is exactly when an XSS strikes. The access token in memory is equally available to the app and invisible to document-based exfiltration. sessionStorage is a convenience API, not a security boundary.",
        },
      ],
      quiz: [
        {
          question: "Why is localStorage called the most dangerous token hotel?",
          options: [
            "It has size limits",
            "Every script on the page can read it, and tokens persist beyond the session",
            "It encrypts weakly",
            "Browsers clear it randomly",
          ],
          answerIndex: 1,
          explanation:
            "One XSS — from a dependency, a tag or an extension — reads everything stored there, and the tokens survive the tab. Memory-only access tokens and HttpOnly cookies remove that read path.",
        },
        {
          question: "Which cookie set is correct for a refresh token?",
          options: [
            "httpOnly: false, sameSite: none",
            "domain-wide with SameSite=None and no Secure",
            "httpOnly: true, secure: true, sameSite: lax, path-scoped",
            "plaintext in a query parameter",
          ],
          answerIndex: 2,
          explanation:
            "The long-lived credential should be unreadable by JavaScript, travel only over HTTPS, resist cross-site attachment, and be scoped to the auth endpoints that actually need it.",
        },
        {
          question: "What bounds the damage of an access token held in memory?",
          options: [
            "Its short time-to-live",
            "The cookie's Max-Age",
            "HTTPS transport",
            "The token's audience claim alone",
          ],
          answerIndex: 0,
          explanation:
            "Memory can be read by a live attacker, but the token is worthless within minutes and never persists. The short TTL is the design assumption that makes memory-only storage viable.",
        },
      ],
    },
    {
      number: 13,
      title: "Token Revocation, Rotation & Replay Detection",
      summary:
        "Every token eventually leaks. The systems that survive are the ones that noticed, revoked, and rotated before the leak mattered.",
      keyIdea:
        "Short access tokens + denylist on jti + family revocation at the refresh layer. Bind every credential to context it cannot be replayed out of.",
      deepDive: [
        {
          heading: "Assume the leak, design the response",
          paragraphs: [
            "Tokens leak: malware, proxies, logs, referer headers, support screenshots. A revocation strategy is not paranoia; it is the normal operating mode of any system that issues credentials. The goal is a small blast radius: know within minutes, revoke within seconds, and rotate so the stolen artifact is worthless before it can be spent twice. That requires state the token itself cannot fake.",
            "Three mechanisms carry the load. Short access-token lifetimes bound the maximum value of any single leak — fifteen minutes of access, not fifteen days. A denylist keyed on jti lets you kill individual tokens mid-flight: check Redis on requests that matter, with the check costing one lookup. Rotation with family tracking turns a stolen refresh token into a detected event instead of a quiet second identity.",
          ],
        },
        {
          heading: "jti, denylists and context binding",
          paragraphs: [
            "The jti claim gives every access token an identity of its own, which is what makes individual revocation possible: mint a random jti, and revoking is one SET with a TTL matched to the token's remaining life. You do not denylist everything — the latency bill matters — but sensitive endpoints, admin surfaces and anything money-shaped should consult it. Everything else leans on the short expiry.",
            "Context binding shrinks replay value further: bind tokens to device, client or session id, and a replayed token from a different context is visible even before revocation. The same idea applies to refresh families — track the IP and user agent a family was issued to, and treat sudden context jumps as theft signals. A credential that only works where it was born is a credential that announces when it travels.",
          ],
        },
        {
          heading: "Rotate everything, rehearse it",
          paragraphs: [
            "Rotation cadence by token type: access tokens every fifteen minutes via refresh, refresh tokens on every use with family revocation on replay, API keys and webhook secrets on a schedule with overlap windows so consumers migrate before the old value dies. Rotation without an overlap plan just produces outages that teach people to hoard old credentials.",
            "Rehearse the incident: kill a user's token family in staging and watch the client recover; revoke one jti and confirm the sensitive endpoint refuses while ordinary pages ride on expiry; fire the replay alert and check it reaches a human. The first time you exercise revocation should not be during a breach — the drill is what makes the real event boring.",
          ],
        },
      ],
      diagram: {
        kind: "cycle",
        title: "The life and death of a token",
        caption: "Revocation is a loop you rehearse, not a feature you hope never runs.",
        steps: [
          { label: "Issue", note: "short TTL, jti set" },
          { label: "Use", note: "sensitive paths check jti" },
          { label: "Leak", note: "assume it happens" },
          { label: "Detect", note: "replay or anomaly alert" },
          { label: "Revoke", note: "denylist jti or family" },
          { label: "Rotate", note: "client recovers silently" },
        ],
      },
      codeExample: {
        language: "sql",
        caption: "A denylist keyed on jti, TTL-matched to the token's remaining life.",
        code: [
          "-- Denylist for individual access tokens",
          "CREATE TABLE revoked_tokens (",
          "  jti        TEXT PRIMARY KEY,",
          "  revoked_at TIMESTAMPTZ NOT NULL DEFAULT now(),",
          "  expires_at TIMESTAMPTZ NOT NULL  -- purge when the token would die anyway",
          ");",
          "",
          "-- Check on sensitive requests; one indexed lookup",
          "SELECT 1 FROM revoked_tokens WHERE jti = $1;",
          "",
          "-- Nightly purge keeps the table small",
          "DELETE FROM revoked_tokens WHERE expires_at < now();",
        ].join("\n"),
      },
      pitfalls: [
        {
          mistake: "Revocation strategy is the token expires eventually.",
          fix: "Short TTLs, a jti denylist on sensitive routes, family revocation at the refresh layer. Expiry alone is not a response.",
        },
        {
          mistake: "No jti claim, so individual tokens cannot be named.",
          fix: "Mint a unique jti per access token. Without it, revocation is all-or-nothing — and all-or-nothing never gets used.",
        },
        {
          mistake: "Replay detection logs a 401 and moves on.",
          fix: "A replayed refresh token revokes the family and pages a human. It is theft evidence, not client flakiness.",
        },
        {
          mistake: "Rotating API keys with no overlap window.",
          fix: "Publish the new secret, migrate consumers, then retire the old one. Overlap turns rotation from an outage into a Tuesday.",
        },
      ],
      fieldChecklist: [
        "Access tokens live fifteen minutes or less, and every one carries a jti.",
        "Sensitive routes consult the denylist; ordinary routes lean on short expiry.",
        "Refresh families revoke on replay, and the alert reaches a human, not a log file.",
        "Tokens are bound to device or session context, and context jumps are treated as signals.",
        "API keys and webhook secrets rotate on a schedule with overlap windows.",
        "I have rehearsed revocation in staging: kill a family, watch the client recover.",
      ],
      keyTerms: [
        {
          term: "jti",
          definition:
            "The JWT ID claim — a unique identifier per token that makes individual denylisting possible.",
        },
        {
          term: "Denylist",
          definition:
            "A store of revoked token identifiers checked on sensitive requests; TTL-matched to the tokens' remaining life.",
        },
        {
          term: "Family revocation",
          definition:
            "Killing every refresh token descended from one grant when a replay is detected — the blast-radius limiter.",
        },
        {
          term: "Replay detection",
          definition:
            "Recognizing a credential presented where its context says it cannot be — a consumed refresh token, a foreign device, a context jump.",
        },
      ],
      interviewQuestions: [
        {
          q: "JWTs are stateless. How do you revoke them?",
          a: "You surround them. Access tokens get short TTLs so leaks expire quickly, a jti denylist for individual kills on sensitive routes, and revocation at the refresh layer where rotation and family tracking live. Binding tokens to device context makes replays visible. Stateless verification is for the happy path; revocation is the state you keep around the edges.",
        },
        {
          q: "What is the difference between rotation and revocation?",
          a: "Rotation is routine: replace credentials on a schedule so any single leak has bounded value. Revocation is emergency: kill a specific token, family or key now because it is compromised or its owner changed. Systems fail when they only do rotation — a stolen credential keeps working until its slot rotates — or only revocation, which becomes too blunt to use.",
        },
        {
          q: "Design the response to a leaked service token, end to end.",
          a: "Revoke the specific jti or family first — seconds matter more than elegance — then rotate the credential with an overlap window, then trace: which contexts used it, from where, and whether any replay was attempted. The client re-authenticates through the normal flow, the alert closes with a timeline, and the postmortem asks why the leak was survivable rather than possible.",
        },
      ],
      quiz: [
        {
          question: "What does the jti claim enable?",
          options: [
            "Compression of the payload",
            "Revoking one specific token without touching the rest",
            "Encryption of claims",
            "Automatic rotation",
          ],
          answerIndex: 1,
          explanation:
            "jti gives each token a unique identifier, so a denylist can kill exactly that token, with a TTL matched to its remaining life. No jti, no targeted revocation.",
        },
        {
          question: "A consumed refresh token is presented again. Correct response?",
          options: [
            "Log a 401 and continue",
            "Rate limit that IP only",
            "Revoke the entire token family and alert a human",
            "Extend the token's expiry",
          ],
          answerIndex: 2,
          explanation:
            "Replay after rotation is theft evidence: you cannot tell which copy is the thief's, so the family dies and the alert fires. Logging a 401 is not a response.",
        },
        {
          question: "Why do API key rotations need an overlap window?",
          options: [
            "Keys cannot be generated twice",
            "It defeats replay attacks",
            "Regulatory requirement only",
            "Consumers must migrate before the old value dies, or rotation becomes an outage",
          ],
          answerIndex: 3,
          explanation:
            "Overlap lets every consumer adopt the new secret while the old one still works, so retirement is quiet. Without it, rotation causes outages that teach teams to hoard credentials.",
        },
      ],
    },
    {
      number: 14,
      title: "Passkeys / WebAuthn & Account Takeover (ATO) Protection",
      summary:
        "The end of the password era is not a prediction anymore — it is a rollout plan. Passkeys replace 'something you know' with cryptographic possession that cannot be phished.",
      keyIdea: "Origin-binding makes phishing structurally impossible. The recovery path is the new password.",
      deepDive: [
        {
          heading: "Possession that cannot be phished",
          paragraphs: [
            "A passkey is a WebAuthn credential: the site registers a public key with the user's device, and sign-in is the device signing a challenge with the private key that never leaves it. Two properties change the game. Origin binding — the browser only releases the credential to the exact site that enrolled it — makes credential phishing structurally impossible: the fake site's challenge is useless. And there is no shared secret to breach, because you hold only the public half.",
            "The ceremony has two halves. Registration produces a credential id, public key and attestation. Authentication returns a signature over the challenge, verified against the stored public key, with the origin and relying-party id checked and a signature counter that should never move backwards — a counter regression is a cloned-authenticator signal. Libraries handle the parsing; you must enforce the checks.",
          ],
        },
        {
          heading: "The rollout is a migration",
          paragraphs: [
            "Ship passkeys alongside passwords, not instead of them: enroll from account settings and after high-risk logins, allow multiple passkeys per user — a laptop and a phone — and keep a password path during the transition. Promotion beats mandate: users who adopt at their own pace stay, while forced cutover floods support. Track adoption, sign-in success rate and recovery usage as the rollout's health metrics.",
            "Cross-device sign-in is what makes passkeys practical: a QR code and Bluetooth proximity let a phone's passkey sign in on a laptop, so losing one device is not losing the account. Platform authenticators sync credentials through iCloud or a Google account — which quietly moves the recovery problem to the platform account's security. Your docs should say so explicitly.",
          ],
        },
        {
          heading: "The recovery path is the new password",
          paragraphs: [
            "Passkeys move the attack to recovery, exactly as 2FA did. A recovery flow that emails magic links past the credential has restored the password era with extra steps. Honest options: a second passkey enrolled proactively, recovery codes generated at enrollment, or verified support recovery with device changes announced to the user through every registered channel. Each option is slower than a reset link; that is the point.",
            "Account-takeover defense is a layered system around whichever credential wins: anomaly detection on login context, step-up challenges on sensitive changes, out-of-band alerts for new devices and email changes, and cool-down windows before credentials can be used for payouts. Measure ATO attempts blocked, not logins accepted. The metric that matters is how often a stolen-anything attacker walks out with an account — drive that toward zero.",
          ],
        },
      ],
      diagram: {
        kind: "pipeline",
        title: "A passkey sign-in, stage by stage",
        caption: "The secret never travels; the site verifies a signature against what it already holds.",
        stages: [
          { label: "Challenge", note: "server mints random bytes" },
          { label: "User verifies", note: "biometric or device PIN" },
          { label: "Sign", note: "private key, never leaves device" },
          { label: "Verify", note: "public key, origin, RP id" },
          { label: "Counter check", note: "no regressions allowed" },
        ],
      },
      pitfalls: [
        {
          mistake: "A passkey rollout that removes the password path on day one.",
          fix: "Run both during migration, promote enrollment in context, and watch adoption and recovery metrics before any cutover decision.",
        },
        {
          mistake: "Skipping origin and relying-party checks because the signature verified.",
          fix: "Verify origin, RP id and challenge on every assertion. A valid signature from the wrong origin is the phishing case WebAuthn exists to stop.",
        },
        {
          mistake: "Recovery via emailed magic links after passkey loss.",
          fix: "Second passkeys, hashed recovery codes, or verified support recovery with user notification. Recovery must be as strong as what it restores.",
        },
        {
          mistake: "Ignoring the signature counter.",
          fix: "Store the counter and reject regressions. A decreasing counter is the classic cloned-authenticator signal, and checking it is free.",
        },
      ],
      fieldChecklist: [
        "Passkeys are enrollable alongside passwords, with promotion in context after high-risk logins.",
        "Every assertion verifies origin, relying-party id, challenge and signature counter.",
        "Users can enroll multiple passkeys and see the devices that hold them.",
        "Recovery uses a second passkey, hashed recovery codes, or verified support — never a magic link.",
        "New-device and credential-change alerts go out through every registered channel.",
        "ATO metrics — attempts blocked, recovery usage — are on the team dashboard.",
      ],
      keyTerms: [
        {
          term: "Passkey",
          definition:
            "A WebAuthn credential pairing a site-held public key with a device-held private key; phishing-resistant by origin binding.",
        },
        {
          term: "Origin binding",
          definition:
            "The browser property that a credential only works for the exact site that enrolled it — the reason fake sites cannot use stolen material.",
        },
        {
          term: "Attestation",
          definition:
            "Metadata at registration describing the authenticator that created the credential; useful for policy, rarely for trust decisions alone.",
        },
        {
          term: "Signature counter",
          definition:
            "An assertion value expected to increase monotonically; a regression signals a cloned authenticator.",
        },
      ],
      interviewQuestions: [
        {
          q: "Why do passkeys end phishing?",
          a: "Because the credential is bound to the origin. A user signing a challenge on the attacker's fake site produces a signature the real site rejects, and the fake site never receives anything reusable — there is no shared secret to steal at all. The password's core flaw, a portable secret typed into whatever form asks, is removed structurally rather than by user training.",
        },
        {
          q: "How do you migrate an existing password-based user base to passkeys?",
          a: "Alongside, not instead: offer enrollment after sign-in and after sensitive actions, allow multiple passkeys per user, keep the password path, and promote with real metrics — adoption, success rate, recovery usage. Cross-device sign-in removes the lost-laptop objection, and platform sync means the recovery story is mostly the platform account's. Cut over only when adoption and recovery load say you can.",
        },
        {
          q: "Passkeys are enrolled. Where does the attacker go now?",
          a: "To recovery and to the surrounding system: they will try support-assisted recovery, email compromise, and fatigue attacks on fallback factors. So the recovery path gets identity verification and user-visible notifications, new-device and credential changes alert everywhere, sensitive actions require step-up, and payouts sit behind cool-down windows. The credential got stronger; the perimeter moves to the weakest adjacent process.",
        },
      ],
      quiz: [
        {
          question: "What makes passkey phishing structurally impossible?",
          options: [
            "Stronger encryption",
            "Origin binding — the credential only signs for the site that enrolled it",
            "Longer key sizes",
            "They require biometrics",
          ],
          answerIndex: 1,
          explanation:
            "The browser releases the credential only to the exact origin that enrolled it. A fake site's challenge yields a signature the real site rejects, and nothing reusable is ever transmitted.",
        },
        {
          question: "During an assertion, which check catches a cloned authenticator?",
          options: [
            "The challenge length",
            "The user's IP address",
            "Token expiry",
            "A signature counter that regresses",
          ],
          answerIndex: 3,
          explanation:
            "Counters must increase monotonically across assertions. A decrease means the private key exists on more than one device — the classic cloned-authenticator signal, and free to check.",
        },
        {
          question: "After passkeys ship, the recovery path should be:",
          options: [
            "An emailed magic link for convenience",
            "Equivalent in strength: second passkey, hashed codes, or verified support",
            "Disabled entirely",
            "The old security questions",
          ],
          answerIndex: 1,
          explanation:
            "Attackers move to the weakest adjacent flow. A magic-link recovery restores password-era risk with extra steps; recovery must match the strength of the credential it restores.",
        },
      ],
    },
  ],
};
