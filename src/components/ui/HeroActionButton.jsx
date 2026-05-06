import { Link } from "react-router-dom";

const btn3dStyle = `
  .btn-3d {
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: linear-gradient(135deg, #7B00C2 0%, #a020f0 40%, #FF1920 100%);
    color: #fff;
    font-weight: 700;
    border-radius: 9999px;
    padding: 14px 38px;
    font-size: 16px;
    border: none;
    cursor: pointer;
    white-space: nowrap;
    letter-spacing: 0.04em;
    text-decoration: none;
    box-shadow:
      0 6px 0px #4a0075,
      0 8px 20px rgba(100, 0, 161, 0.45),
      inset 0 1px 0 rgba(255,255,255,0.25);
    transform: translateY(0);
    transition: transform 0.13s ease, box-shadow 0.13s ease;
    text-shadow: 0 1px 3px rgba(0,0,0,0.3);
  }

  .btn-3d::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 9999px;
    background: linear-gradient(180deg, rgba(255,255,255,0.18) 0%, transparent 60%);
    pointer-events: none;
  }

  .btn-3d:hover {
    transform: translateY(-3px);
    box-shadow:
      0 9px 0px #4a0075,
      0 14px 28px rgba(100, 0, 161, 0.55),
      inset 0 1px 0 rgba(255,255,255,0.25);
    color: #fff;
    text-decoration: none;
  }

  .btn-3d:active {
    transform: translateY(4px);
    box-shadow:
      0 2px 0px #4a0075,
      0 4px 10px rgba(100, 0, 161, 0.35),
      inset 0 1px 0 rgba(255,255,255,0.15);
  }

  .btn-3d-arrow {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 26px;
    height: 26px;
    background: rgba(255,255,255,0.22);
    border-radius: 50%;
    transition: transform 0.2s;
    flex-shrink: 0;
  }

  .btn-3d:hover .btn-3d-arrow {
    transform: translateX(4px);
  }

  .btn-secondary {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 14px 38px;
    border-radius: 9999px;
    font-weight: 700;
    font-size: 16px;
    border: 2px solid #6400A1;
    background: transparent;
    color: #6400A1;
    text-decoration: none;
    transition: all 0.2s ease-out;
    letter-spacing: 0.04em;
    white-space: nowrap;
  }

  .btn-secondary:hover {
    background: rgba(100, 0, 161, 0.06);
    transform: translateY(-2px);
    color: #6400A1;
    text-decoration: none;
  }
`;

let styleInjected = false;

function injectStyle() {
  if (styleInjected || typeof document === "undefined") return;
  const el = document.createElement("style");
  el.textContent = btn3dStyle;
  document.head.appendChild(el);
  styleInjected = true;
}

export default function HeroActionButton({ to, href, onClick, variant = "primary", children }) {
  injectStyle();

  if (variant === "secondary") {
    if (to) return <Link to={to} className="btn-secondary">{children}</Link>;
    if (href) return <a href={href} className="btn-secondary">{children}</a>;
    return <button onClick={onClick} className="btn-secondary">{children}</button>;
  }

  // Primary — 3D button
  const inner = (
    <>
      {children}
      <span className="btn-3d-arrow" aria-hidden="true">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </span>
    </>
  );

  if (to) return <Link to={to} className="btn-3d">{inner}</Link>;
  if (href) return <a href={href} className="btn-3d">{inner}</a>;
  return <button onClick={onClick} className="btn-3d">{inner}</button>;
}