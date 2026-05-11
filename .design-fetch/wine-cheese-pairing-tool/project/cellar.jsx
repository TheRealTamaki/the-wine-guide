// Direction A — "The Cellar"
// Old-world cellar: deep burgundy on cream, vintage editorial typography,
// large type, dossier-style result page, subtle paper texture, no imagery.

const { useState, useEffect, useMemo, useRef } = React;

// ─── Score visualization variants ───
function ScoreWax({ score, accent }) {
  // A wax seal — circle with embossed number
  return (
    <div style={{
      width: 92, height: 92, borderRadius: '50%',
      background: `radial-gradient(circle at 35% 30%, ${accent} 0%, ${accent} 40%, #5a1a1f 100%)`,
      display: 'grid', placeItems: 'center', color: '#f5ecd9',
      fontFamily: 'var(--cellar-display)', fontSize: 32, fontWeight: 500,
      boxShadow: 'inset -4px -6px 10px rgba(0,0,0,0.35), inset 3px 4px 6px rgba(255,255,255,0.12), 0 4px 14px rgba(60,10,15,0.35)',
      transform: 'rotate(-6deg)', letterSpacing: '-0.02em',
      border: '1px solid rgba(0,0,0,0.25)', flexShrink: 0,
    }}>
      <div style={{ position: 'relative' }}>
        {score}
        <div style={{ position: 'absolute', top: -2, right: -10, fontSize: 11, fontFamily: 'var(--cellar-body)', letterSpacing: '0.1em' }}>°</div>
      </div>
    </div>
  );
}

function ScoreStars({ score, accent }) {
  const filled = Math.round(score / 20);
  return (
    <div style={{ color: accent, fontFamily: 'var(--cellar-display)', fontSize: 28, letterSpacing: '0.1em', lineHeight: 1, flexShrink: 0 }}>
      {'★'.repeat(filled)}<span style={{ opacity: 0.25 }}>{'★'.repeat(5 - filled)}</span>
      <div style={{ fontSize: 11, fontFamily: 'var(--cellar-body)', letterSpacing: '0.18em', textTransform: 'uppercase', marginTop: 4, opacity: 0.7 }}>
        {score}/100
      </div>
    </div>
  );
}

function ScoreBar({ score, accent }) {
  return (
    <div style={{ width: 140, flexShrink: 0 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 6 }}>
        <span style={{ fontFamily: 'var(--cellar-display)', fontSize: 26, color: accent, lineHeight: 1 }}>{score}</span>
        <span style={{ fontFamily: 'var(--cellar-body)', fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', opacity: 0.6 }}>/ 100</span>
      </div>
      <div style={{ height: 4, background: 'rgba(90,26,31,0.15)', borderRadius: 0, overflow: 'hidden' }}>
        <div style={{ height: '100%', width: `${score}%`, background: accent }}></div>
      </div>
    </div>
  );
}

function Score({ score, viz, accent }) {
  if (viz === 'stars') return <ScoreStars score={score} accent={accent} />;
  if (viz === 'bar') return <ScoreBar score={score} accent={accent} />;
  return <ScoreWax score={score} accent={accent} />;
}

// ─── Vintage page header ───
function CellarHeader({ mode, setMode, dietary, setDietary }) {
  return (
    <div style={{ borderBottom: '1px solid var(--cellar-ink-30)', paddingBottom: 24, marginBottom: 32 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 24 }}>
        <div>
          <div style={{ fontFamily: 'var(--cellar-body)', fontSize: 11, letterSpacing: '0.4em', textTransform: 'uppercase', color: 'var(--cellar-accent)', marginBottom: 8 }}>
            ◆ Est. MMXXVI · Cellar No. 7 ◆
          </div>
          <h1 style={{ fontFamily: 'var(--cellar-display)', fontSize: 56, lineHeight: 0.95, margin: 0, fontWeight: 400, color: 'var(--cellar-ink)', letterSpacing: '-0.01em' }}>
            The Pairing<br /><em style={{ fontStyle: 'italic', color: 'var(--cellar-accent)' }}>Cellar</em>
          </h1>
          <div style={{ fontFamily: 'var(--cellar-body)', fontSize: 13, fontStyle: 'italic', color: 'var(--cellar-ink-70)', marginTop: 10, maxWidth: 380 }}>
            A friendly guide to wine &amp; cheese — simple rules, a little romance, no pretension.
          </div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ display: 'inline-flex', border: '1px solid var(--cellar-ink-30)', background: 'var(--cellar-bg)' }}>
            <button onClick={() => setMode('wine')} style={cellarToggleBtn(mode === 'wine')}>
              <span style={{ display: 'block', fontSize: 9, letterSpacing: '0.25em', opacity: 0.6 }}>I HAVE</span>
              Wine
            </button>
            <button onClick={() => setMode('cheese')} style={cellarToggleBtn(mode === 'cheese')}>
              <span style={{ display: 'block', fontSize: 9, letterSpacing: '0.25em', opacity: 0.6 }}>I HAVE</span>
              Cheese
            </button>
          </div>
          <label style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 8, marginTop: 14, fontFamily: 'var(--cellar-body)', fontSize: 12, color: 'var(--cellar-ink-70)', cursor: 'pointer' }}>
            <input type="checkbox" checked={dietary} onChange={(e) => setDietary(e.target.checked)} style={{ accentColor: 'var(--cellar-accent)' }} />
            Vegetarian rennet only
          </label>
        </div>
      </div>
    </div>
  );
}

const cellarToggleBtn = (active) => ({
  padding: '12px 24px',
  background: active ? 'var(--cellar-ink)' : 'transparent',
  color: active ? 'var(--cellar-bg)' : 'var(--cellar-ink)',
  border: 'none',
  fontFamily: 'var(--cellar-display)',
  fontSize: 18,
  cursor: 'pointer',
  letterSpacing: '0.02em',
  textAlign: 'center',
  minWidth: 120,
});

// ─── Picker grid (left column) ───
function CellarPicker({ items, mode, selectedId, onSelect, dietary }) {
  const filtered = mode === 'cheese' && dietary ? items.filter((i) => i.veg) : items;
  const grouped = useMemo(() => {
    const g = {};
    filtered.forEach((i) => {
      const key = mode === 'wine' ? catLabel(i.cat) : i.style;
      (g[key] = g[key] || []).push(i);
    });
    return g;
  }, [filtered, mode]);

  return (
    <div>
      <div style={{ fontFamily: 'var(--cellar-body)', fontSize: 10, letterSpacing: '0.35em', textTransform: 'uppercase', color: 'var(--cellar-ink-70)', marginBottom: 16, paddingBottom: 8, borderBottom: '1px solid var(--cellar-ink-15)' }}>
        Choose your {mode}
      </div>
      {Object.entries(grouped).map(([group, list]) => (
        <div key={group} style={{ marginBottom: 24 }}>
          <div style={{ fontFamily: 'var(--cellar-display)', fontSize: 13, fontStyle: 'italic', color: 'var(--cellar-accent)', marginBottom: 8, letterSpacing: '0.04em' }}>
            — {group}
          </div>
          {list.map((i) => (
            <button key={i.id} onClick={() => onSelect(i.id)} style={{
              display: 'block', width: '100%', textAlign: 'left',
              padding: '8px 10px', margin: '2px 0',
              background: selectedId === i.id ? 'var(--cellar-ink)' : 'transparent',
              color: selectedId === i.id ? 'var(--cellar-bg)' : 'var(--cellar-ink)',
              border: 'none', cursor: 'pointer',
              fontFamily: 'var(--cellar-display)', fontSize: 17,
              transition: 'background 0.12s',
              borderLeft: selectedId === i.id ? '3px solid var(--cellar-accent)' : '3px solid transparent',
            }}>
              {i.name}
              <div style={{ fontFamily: 'var(--cellar-body)', fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', opacity: 0.55, marginTop: 2 }}>
                {i.region}
              </div>
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}

const catLabel = (c) => ({ red: 'Reds', white: 'Whites', rose: 'Rosé', sparkling: 'Sparkling', dessert: 'Dessert & Fortified' }[c] || c);

// ─── Pairing dossier (right column) ───
function CellarDossier({ source, mode, viz, layout, board, onAddBoard, onRemoveBoard, dietary }) {
  if (!source) {
    return (
      <div style={{ padding: '60px 40px', textAlign: 'center', color: 'var(--cellar-ink-50)', fontFamily: 'var(--cellar-display)', fontStyle: 'italic', fontSize: 22 }}>
        <div style={{ fontSize: 60, marginBottom: 12, opacity: 0.4 }}>※</div>
        Select a {mode} to begin.<br />
        <span style={{ fontSize: 13, fontStyle: 'normal', fontFamily: 'var(--cellar-body)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
          Pairings will appear here
        </span>
      </div>
    );
  }

  const otherList = mode === 'wine' ? CHEESES : WINES;
  const filteredOthers = mode === 'wine' && dietary ? otherList.filter((c) => c.veg) : otherList;
  const top = topPairings(source, filteredOthers, 4);
  const accent = 'var(--cellar-accent)';

  return (
    <div>
      {/* Hero card for the source */}
      <div style={{
        padding: '28px 32px 32px',
        background: 'var(--cellar-ink)',
        color: 'var(--cellar-bg)',
        position: 'relative',
        marginBottom: 28,
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 24 }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: 'var(--cellar-body)', fontSize: 10, letterSpacing: '0.35em', textTransform: 'uppercase', opacity: 0.55, marginBottom: 8 }}>
              {mode === 'wine' ? `${catLabel(source.cat)} · ${source.region}` : `${source.style} · ${source.region}`}
            </div>
            <div style={{ fontFamily: 'var(--cellar-display)', fontSize: 44, lineHeight: 1, fontWeight: 400, letterSpacing: '-0.01em' }}>
              {source.name}
            </div>
            <div style={{ fontFamily: 'var(--cellar-display)', fontSize: 16, fontStyle: 'italic', marginTop: 12, opacity: 0.85, maxWidth: 440 }}>
              {source.blurb}
            </div>
          </div>
          <div style={{ textAlign: 'right', fontFamily: 'var(--cellar-body)', fontSize: 11, letterSpacing: '0.05em', lineHeight: 1.7, opacity: 0.7, minWidth: 130 }}>
            <div><span style={{ opacity: 0.5 }}>Body</span> {'●'.repeat(source.body)}{'○'.repeat(5 - source.body)}</div>
            <div><span style={{ opacity: 0.5 }}>Intensity</span> {'●'.repeat(source.intensity)}{'○'.repeat(5 - source.intensity)}</div>
            {mode === 'wine' && <div><span style={{ opacity: 0.5 }}>Serve</span> {source.serve}</div>}
            {mode === 'cheese' && <div><span style={{ opacity: 0.5 }}>Milk</span> {source.milk}</div>}
            {mode === 'cheese' && <div><span style={{ opacity: 0.5 }}>Aged</span> {source.age}</div>}
          </div>
        </div>
        <div style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(245,236,217,0.18)', fontFamily: 'var(--cellar-body)', fontSize: 12, letterSpacing: '0.04em', opacity: 0.85 }}>
          <em style={{ opacity: 0.55 }}>Tasting notes — </em>{source.notes}
        </div>
      </div>

      {/* Section title */}
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 18 }}>
        <div style={{ fontFamily: 'var(--cellar-display)', fontSize: 28, fontStyle: 'italic', color: 'var(--cellar-ink)' }}>
          Pours best with —
        </div>
        <div style={{ flex: 1, height: 1, background: 'var(--cellar-ink-30)' }}></div>
        <div style={{ fontFamily: 'var(--cellar-body)', fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--cellar-ink-50)' }}>
          {top.length} suggestions
        </div>
      </div>

      {/* Pairings */}
      <div style={layout === 'list' ? { display: 'flex', flexDirection: 'column', gap: 0 } : { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        {top.map((p, idx) => (
          <PairingEntry
            key={p.item.id}
            rank={idx + 1}
            item={p.item}
            score={p.score}
            why={p.why}
            mode={mode}
            viz={viz}
            layout={layout}
            accent={accent}
            inBoard={board.includes(p.item.id)}
            onAdd={() => onAddBoard(p.item.id)}
            onRemove={() => onRemoveBoard(p.item.id)}
            canBoard={mode === 'wine'}
          />
        ))}
      </div>
    </div>
  );
}

function PairingEntry({ rank, item, score, why, mode, viz, layout, accent, inBoard, onAdd, onRemove, canBoard }) {
  const isList = layout === 'list';
  return (
    <div style={{
      padding: isList ? '20px 4px' : '20px',
      borderTop: isList ? '1px solid var(--cellar-ink-15)' : 'none',
      border: isList ? null : '1px solid var(--cellar-ink-15)',
      background: isList ? 'transparent' : 'var(--cellar-bg-warm)',
      display: 'flex', gap: 18, alignItems: 'flex-start',
    }}>
      <div style={{ fontFamily: 'var(--cellar-display)', fontSize: 36, fontStyle: 'italic', color: 'var(--cellar-accent)', lineHeight: 0.9, minWidth: 30, opacity: 0.8 }}>
        {String(rank).padStart(2, '0')}
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontFamily: 'var(--cellar-body)', fontSize: 10, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--cellar-ink-50)', marginBottom: 4 }}>
          {mode === 'wine' ? `${item.style} · ${item.region}` : `${catLabel(item.cat)} · ${item.region}`}
        </div>
        <div style={{ fontFamily: 'var(--cellar-display)', fontSize: 24, color: 'var(--cellar-ink)', lineHeight: 1.1, marginBottom: 8 }}>
          {item.name}
        </div>
        <div style={{ fontFamily: 'var(--cellar-body)', fontSize: 13, lineHeight: 1.55, color: 'var(--cellar-ink-70)', fontStyle: 'italic', marginBottom: 10 }}>
          “{why}”
        </div>
        <div style={{ fontFamily: 'var(--cellar-body)', fontSize: 11, color: 'var(--cellar-ink-50)', letterSpacing: '0.03em' }}>
          {item.notes}
        </div>
        {canBoard && (
          <button onClick={inBoard ? onRemove : onAdd} style={{
            marginTop: 12, padding: '6px 14px', background: inBoard ? 'var(--cellar-accent)' : 'transparent',
            color: inBoard ? 'var(--cellar-bg)' : 'var(--cellar-accent)',
            border: '1px solid var(--cellar-accent)', cursor: 'pointer',
            fontFamily: 'var(--cellar-body)', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase',
          }}>
            {inBoard ? '✓ on the board' : '+ add to board'}
          </button>
        )}
      </div>
      <Score score={score} viz={viz} accent={accent} />
    </div>
  );
}

// ─── Board strip ───
function CellarBoard({ wine, board, onRemove, onClear }) {
  if (!wine || board.length === 0) {
    return (
      <div style={{ padding: '20px 24px', background: 'var(--cellar-bg-warm)', border: '1px dashed var(--cellar-ink-30)', textAlign: 'center', fontFamily: 'var(--cellar-display)', fontSize: 16, fontStyle: 'italic', color: 'var(--cellar-ink-50)' }}>
        {wine ? `Build a board around ${wine.name} — add cheeses from the right.` : 'Pick a wine to start building a cheese board.'}
      </div>
    );
  }
  const cheeses = board.map((id) => CHEESES.find((c) => c.id === id)).filter(Boolean);
  return (
    <div style={{ padding: '20px 24px', background: 'var(--cellar-ink)', color: 'var(--cellar-bg)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
        <div>
          <div style={{ fontFamily: 'var(--cellar-body)', fontSize: 10, letterSpacing: '0.35em', textTransform: 'uppercase', opacity: 0.55 }}>
            Your board
          </div>
          <div style={{ fontFamily: 'var(--cellar-display)', fontSize: 22, fontStyle: 'italic' }}>
            A board for <span style={{ color: 'var(--cellar-accent-light)' }}>{wine.name}</span>
          </div>
        </div>
        <button onClick={onClear} style={{ background: 'transparent', border: '1px solid rgba(245,236,217,0.4)', color: 'var(--cellar-bg)', padding: '6px 12px', fontFamily: 'var(--cellar-body)', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', cursor: 'pointer' }}>
          Clear
        </button>
      </div>
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        {cheeses.map((c) => (
          <div key={c.id} style={{ padding: '10px 14px', background: 'rgba(245,236,217,0.08)', border: '1px solid rgba(245,236,217,0.2)', display: 'flex', alignItems: 'center', gap: 12 }}>
            <div>
              <div style={{ fontFamily: 'var(--cellar-display)', fontSize: 16 }}>{c.name}</div>
              <div style={{ fontFamily: 'var(--cellar-body)', fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase', opacity: 0.5 }}>{c.style}</div>
            </div>
            <button onClick={() => onRemove(c.id)} style={{ background: 'transparent', border: 'none', color: 'var(--cellar-bg)', cursor: 'pointer', fontSize: 16, opacity: 0.6, padding: 0, lineHeight: 1 }}>×</button>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 14, paddingTop: 12, borderTop: '1px solid rgba(245,236,217,0.15)', fontFamily: 'var(--cellar-body)', fontSize: 11, fontStyle: 'italic', opacity: 0.7 }}>
        ✶ Sommelier tip — serve cheeses 30 minutes from the fridge, mildest to strongest. Open the wine 20 minutes before pouring.
      </div>
    </div>
  );
}

// ─── Main A app ───
function CellarApp({ tweaks }) {
  const [mode, setMode] = useState('wine');
  const [wineId, setWineId] = useState('pinot');
  const [cheeseId, setCheeseId] = useState('comte');
  const [dietary, setDietary] = useState(false);
  const [board, setBoard] = useState([]);

  const source = mode === 'wine' ? WINES.find((w) => w.id === wineId) : CHEESES.find((c) => c.id === cheeseId);
  const wineForBoard = WINES.find((w) => w.id === wineId);

  const onSelect = (id) => mode === 'wine' ? setWineId(id) : setCheeseId(id);
  const items = mode === 'wine' ? WINES : CHEESES;

  // Apply tweak vars
  const cssVars = {
    '--cellar-bg': tweaks.palette === 'noir' ? '#1a1416' : tweaks.palette === 'oak' ? '#f0e4cc' : '#f5ecd9',
    '--cellar-bg-warm': tweaks.palette === 'noir' ? '#241b1d' : tweaks.palette === 'oak' ? '#e6d8bc' : '#ede1c8',
    '--cellar-ink': tweaks.palette === 'noir' ? '#f5ecd9' : '#3d1417',
    '--cellar-ink-70': tweaks.palette === 'noir' ? 'rgba(245,236,217,0.75)' : 'rgba(61,20,23,0.72)',
    '--cellar-ink-50': tweaks.palette === 'noir' ? 'rgba(245,236,217,0.55)' : 'rgba(61,20,23,0.5)',
    '--cellar-ink-30': tweaks.palette === 'noir' ? 'rgba(245,236,217,0.3)' : 'rgba(61,20,23,0.3)',
    '--cellar-ink-15': tweaks.palette === 'noir' ? 'rgba(245,236,217,0.15)' : 'rgba(61,20,23,0.15)',
    '--cellar-accent': tweaks.palette === 'noir' ? '#d4a574' : tweaks.palette === 'oak' ? '#7a3a1d' : '#8b1c2d',
    '--cellar-accent-light': tweaks.palette === 'noir' ? '#e8c89a' : tweaks.palette === 'oak' ? '#c4946a' : '#c45a6a',
    '--cellar-display': tweaks.font === 'modern' ? '"DM Serif Display", "Playfair Display", serif'
      : tweaks.font === 'humanist' ? '"Cormorant Garamond", "EB Garamond", serif'
      : '"Cormorant SC", "EB Garamond", serif',
    '--cellar-body': '"Crimson Text", "EB Garamond", Georgia, serif',
  };

  return (
    <div style={{
      ...cssVars,
      background: 'var(--cellar-bg)',
      color: 'var(--cellar-ink)',
      minHeight: '100vh',
      fontFamily: 'var(--cellar-body)',
      backgroundImage: tweaks.palette === 'noir'
        ? 'radial-gradient(circle at 20% 10%, rgba(212,165,116,0.08), transparent 50%), radial-gradient(circle at 90% 80%, rgba(139,28,45,0.1), transparent 50%)'
        : 'radial-gradient(circle at 20% 0%, rgba(139,28,45,0.04), transparent 50%), radial-gradient(circle at 100% 100%, rgba(122,58,29,0.05), transparent 60%)',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '40px 48px 60px' }}>
        <CellarHeader mode={mode} setMode={setMode} dietary={dietary} setDietary={setDietary} />
        <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: 48, marginBottom: 32 }}>
          <CellarPicker items={items} mode={mode} selectedId={mode === 'wine' ? wineId : cheeseId} onSelect={onSelect} dietary={dietary} />
          <CellarDossier
            source={source} mode={mode}
            viz={tweaks.scoreViz} layout={tweaks.cardLayout}
            board={board} dietary={dietary}
            onAddBoard={(id) => setBoard((b) => b.includes(id) ? b : [...b, id])}
            onRemoveBoard={(id) => setBoard((b) => b.filter((x) => x !== id))}
          />
        </div>
        {mode === 'wine' && (
          <CellarBoard wine={wineForBoard} board={board} onRemove={(id) => setBoard((b) => b.filter((x) => x !== id))} onClear={() => setBoard([])} />
        )}
        <div style={{ textAlign: 'center', marginTop: 40, fontFamily: 'var(--cellar-display)', fontStyle: 'italic', fontSize: 13, color: 'var(--cellar-ink-50)', letterSpacing: '0.05em' }}>
          ✦ ✦ ✦
        </div>
      </div>
    </div>
  );
}

window.CellarApp = CellarApp;
