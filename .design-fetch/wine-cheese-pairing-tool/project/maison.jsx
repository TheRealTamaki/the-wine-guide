// Direction B — "Maison" 
// More modern editorial — burgundy-on-cream still, but with a magazine-spread layout:
// horizontal scrolling pairing strip, big numerical match scores, sommelier sidebar,
// pull quotes. Feels like a Kinfolk-meets-old-cellar editorial.

const { useState: useStateB, useMemo: useMemoB } = React;

function ScoreNum({ score, accent }) {
  return (
    <div style={{ textAlign: 'center', flexShrink: 0 }}>
      <div style={{ fontFamily: 'var(--maison-display)', fontSize: 72, lineHeight: 0.85, fontWeight: 400, color: accent, letterSpacing: '-0.04em' }}>
        {score}
      </div>
      <div style={{ fontFamily: 'var(--maison-body)', fontSize: 9, letterSpacing: '0.35em', textTransform: 'uppercase', color: 'var(--maison-ink-50)', marginTop: 2 }}>
        match
      </div>
    </div>
  );
}

function ScoreRing({ score, accent }) {
  const r = 32, c = 2 * Math.PI * r;
  return (
    <div style={{ position: 'relative', width: 84, height: 84, flexShrink: 0 }}>
      <svg width="84" height="84" viewBox="0 0 84 84" style={{ transform: 'rotate(-90deg)' }}>
        <circle cx="42" cy="42" r={r} fill="none" stroke="var(--maison-ink-15)" strokeWidth="3" />
        <circle cx="42" cy="42" r={r} fill="none" stroke={accent} strokeWidth="3"
          strokeDasharray={`${(score / 100) * c} ${c}`} strokeLinecap="round" />
      </svg>
      <div style={{ position: 'absolute', inset: 0, display: 'grid', placeItems: 'center', fontFamily: 'var(--maison-display)', fontSize: 26, color: 'var(--maison-ink)', letterSpacing: '-0.02em' }}>
        {score}
      </div>
    </div>
  );
}

function ScoreDots({ score, accent }) {
  const filled = Math.round(score / 10);
  return (
    <div style={{ flexShrink: 0, textAlign: 'right' }}>
      <div style={{ display: 'flex', gap: 3 }}>
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i} style={{
            width: 6, height: 16,
            background: i < filled ? accent : 'var(--maison-ink-15)',
          }} />
        ))}
      </div>
      <div style={{ fontFamily: 'var(--maison-display)', fontSize: 22, color: 'var(--maison-ink)', marginTop: 6, letterSpacing: '-0.02em' }}>
        {score}<span style={{ fontSize: 11, opacity: 0.5, letterSpacing: '0.1em' }}>/100</span>
      </div>
    </div>
  );
}

function MaisonScore({ score, viz, accent }) {
  if (viz === 'ring') return <ScoreRing score={score} accent={accent} />;
  if (viz === 'dots') return <ScoreDots score={score} accent={accent} />;
  return <ScoreNum score={score} accent={accent} />;
}

function MaisonApp({ tweaks }) {
  const [mode, setMode] = useStateB('wine');
  const [wineId, setWineId] = useStateB('champ');
  const [cheeseId, setCheeseId] = useStateB('brie');
  const [dietary, setDietary] = useStateB(false);
  const [board, setBoard] = useStateB([]);
  const [hovered, setHovered] = useStateB(null);

  const source = mode === 'wine' ? WINES.find((w) => w.id === wineId) : CHEESES.find((c) => c.id === cheeseId);
  const wineForBoard = WINES.find((w) => w.id === wineId);
  const otherList = mode === 'wine' ? CHEESES : WINES;
  const filteredOthers = mode === 'wine' && dietary ? otherList.filter((c) => c.veg) : otherList;
  const top = useMemoB(() => topPairings(source, filteredOthers, 6), [source, filteredOthers]);
  const items = mode === 'wine' ? WINES : CHEESES;
  const filteredItems = mode === 'cheese' && dietary ? items.filter((i) => i.veg) : items;

  const cssVars = {
    '--maison-bg': tweaks.palette === 'noir' ? '#0e0a0c' : tweaks.palette === 'oak' ? '#ede1c5' : '#f3e9d3',
    '--maison-paper': tweaks.palette === 'noir' ? '#1a1316' : tweaks.palette === 'oak' ? '#f6ecd2' : '#faf2dd',
    '--maison-ink': tweaks.palette === 'noir' ? '#f5ecd9' : '#2a0d10',
    '--maison-ink-70': tweaks.palette === 'noir' ? 'rgba(245,236,217,0.7)' : 'rgba(42,13,16,0.7)',
    '--maison-ink-50': tweaks.palette === 'noir' ? 'rgba(245,236,217,0.5)' : 'rgba(42,13,16,0.5)',
    '--maison-ink-15': tweaks.palette === 'noir' ? 'rgba(245,236,217,0.15)' : 'rgba(42,13,16,0.15)',
    '--maison-accent': tweaks.palette === 'noir' ? '#e8b87c' : tweaks.palette === 'oak' ? '#5e2a14' : '#6b1622',
    '--maison-display': tweaks.font === 'modern' ? '"DM Serif Display", serif'
      : tweaks.font === 'humanist' ? '"Cormorant Garamond", serif'
      : '"Cormorant SC", serif',
    '--maison-body': '"Crimson Text", Georgia, serif',
    '--maison-mono': '"JetBrains Mono", "Courier New", monospace',
  };

  const accent = 'var(--maison-accent)';

  return (
    <div style={{
      ...cssVars,
      background: 'var(--maison-bg)',
      color: 'var(--maison-ink)',
      minHeight: '100vh',
      fontFamily: 'var(--maison-body)',
    }}>
      {/* Top bar */}
      <div style={{ borderBottom: '1px solid var(--maison-ink-15)', padding: '20px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 14 }}>
          <div style={{ fontFamily: 'var(--maison-display)', fontSize: 26, fontStyle: 'italic', color: accent, letterSpacing: '-0.01em' }}>Maison</div>
          <div style={{ fontFamily: 'var(--maison-mono)', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--maison-ink-50)' }}>
            № 7 / Wine &amp; Cheese
          </div>
        </div>
        <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: 6, fontFamily: 'var(--maison-mono)', fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--maison-ink-70)', cursor: 'pointer' }}>
            <input type="checkbox" checked={dietary} onChange={(e) => setDietary(e.target.checked)} style={{ accentColor: accent }} />
            Veg rennet
          </label>
          <div style={{ display: 'inline-flex', gap: 0 }}>
            <button onClick={() => setMode('wine')} style={maisonTopBtn(mode === 'wine')}>Start with wine</button>
            <button onClick={() => setMode('cheese')} style={maisonTopBtn(mode === 'cheese')}>Start with cheese</button>
          </div>
        </div>
      </div>

      {/* Hero spread */}
      <div style={{ padding: '60px 40px 40px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'end', borderBottom: '1px solid var(--maison-ink-15)' }}>
        <div>
          <div style={{ fontFamily: 'var(--maison-mono)', fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase', color: accent, marginBottom: 16 }}>
            Chapter I — The {mode === 'wine' ? 'Wine' : 'Cheese'}
          </div>
          <h1 style={{ fontFamily: 'var(--maison-display)', fontSize: 110, lineHeight: 0.85, margin: 0, fontWeight: 400, letterSpacing: '-0.04em' }}>
            {source.name.split(' ')[0]}
            <em style={{ display: 'block', fontStyle: 'italic', color: accent, fontSize: 64, lineHeight: 1, marginTop: 8 }}>
              {source.name.split(' ').slice(1).join(' ') || `from ${source.region}`}
            </em>
          </h1>
          <div style={{ fontFamily: 'var(--maison-body)', fontSize: 17, fontStyle: 'italic', color: 'var(--maison-ink-70)', marginTop: 20, maxWidth: 460, lineHeight: 1.5 }}>
            {source.blurb}
          </div>
        </div>
        <div>
          <div style={{ fontFamily: 'var(--maison-mono)', fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--maison-ink-50)', marginBottom: 14 }}>
            Profile
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px 32px', fontFamily: 'var(--maison-body)', fontSize: 14 }}>
            <ProfileRow k="Region" v={source.region} />
            <ProfileRow k={mode === 'wine' ? 'Style' : 'Style'} v={mode === 'wine' ? catLabel(source.cat) : source.style} />
            <ProfileRow k="Body" v={'●'.repeat(source.body) + '○'.repeat(5 - source.body)} accent={accent} />
            <ProfileRow k="Intensity" v={'●'.repeat(source.intensity) + '○'.repeat(5 - source.intensity)} accent={accent} />
            {mode === 'wine' && <ProfileRow k="Serve" v={source.serve} />}
            {mode === 'cheese' && <ProfileRow k="Milk" v={source.milk} />}
            {mode === 'cheese' && <ProfileRow k="Aged" v={source.age} />}
          </div>
          <div style={{ marginTop: 24, padding: '16px 0', borderTop: '1px solid var(--maison-ink-15)', borderBottom: '1px solid var(--maison-ink-15)', fontFamily: 'var(--maison-body)', fontSize: 14, fontStyle: 'italic', color: 'var(--maison-ink-70)' }}>
            <span style={{ fontFamily: 'var(--maison-mono)', fontSize: 9, letterSpacing: '0.25em', textTransform: 'uppercase', color: accent, fontStyle: 'normal', display: 'block', marginBottom: 6 }}>
              On the palate
            </span>
            {source.notes}
          </div>
        </div>
      </div>

      {/* Picker rail */}
      <div style={{ padding: '24px 40px', borderBottom: '1px solid var(--maison-ink-15)', display: 'flex', gap: 8, overflowX: 'auto', alignItems: 'center' }}>
        <div style={{ fontFamily: 'var(--maison-mono)', fontSize: 9, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--maison-ink-50)', whiteSpace: 'nowrap', marginRight: 12 }}>
          Browse →
        </div>
        {filteredItems.map((i) => {
          const sel = (mode === 'wine' ? wineId : cheeseId) === i.id;
          return (
            <button key={i.id}
              onClick={() => mode === 'wine' ? setWineId(i.id) : setCheeseId(i.id)}
              style={{
                padding: '8px 14px',
                background: sel ? 'var(--maison-ink)' : 'transparent',
                color: sel ? 'var(--maison-bg)' : 'var(--maison-ink)',
                border: '1px solid ' + (sel ? 'var(--maison-ink)' : 'var(--maison-ink-15)'),
                fontFamily: 'var(--maison-display)', fontSize: 16,
                cursor: 'pointer', whiteSpace: 'nowrap', flexShrink: 0,
                transition: 'all 0.12s',
              }}>
              {i.name}
            </button>
          );
        })}
      </div>

      {/* Pairing section */}
      <div style={{ padding: '60px 40px 40px' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 24, marginBottom: 36 }}>
          <div style={{ fontFamily: 'var(--maison-mono)', fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase', color: accent }}>
            Chapter II
          </div>
          <h2 style={{ fontFamily: 'var(--maison-display)', fontSize: 56, lineHeight: 0.95, margin: 0, fontWeight: 400, letterSpacing: '-0.02em' }}>
            Six <em style={{ fontStyle: 'italic', color: accent }}>{mode === 'wine' ? 'cheeses' : 'wines'}</em> for the table.
          </h2>
        </div>

        <div style={tweaks.cardLayout === 'grid'
          ? { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1, background: 'var(--maison-ink-15)', border: '1px solid var(--maison-ink-15)' }
          : { display: 'flex', flexDirection: 'column', borderTop: '1px solid var(--maison-ink-15)' }}>
          {top.map((p, idx) => (
            <MaisonPairing key={p.item.id}
              rank={idx + 1} item={p.item} score={p.score} why={p.why}
              mode={mode} viz={tweaks.scoreViz} accent={accent}
              layout={tweaks.cardLayout}
              hovered={hovered === p.item.id}
              onHover={() => setHovered(p.item.id)} onLeave={() => setHovered(null)}
              inBoard={board.includes(p.item.id)}
              canBoard={mode === 'wine'}
              onAdd={() => setBoard((b) => b.includes(p.item.id) ? b : [...b, p.item.id])}
              onRemove={() => setBoard((b) => b.filter((x) => x !== p.item.id))}
            />
          ))}
        </div>
      </div>

      {/* Board strip */}
      {mode === 'wine' && <MaisonBoard wine={wineForBoard} board={board} accent={accent}
        onRemove={(id) => setBoard((b) => b.filter((x) => x !== id))}
        onClear={() => setBoard([])} />}

      <div style={{ padding: '40px', textAlign: 'center', fontFamily: 'var(--maison-display)', fontStyle: 'italic', fontSize: 14, color: 'var(--maison-ink-50)', borderTop: '1px solid var(--maison-ink-15)' }}>
        ✦ &nbsp; Pour slowly. Eat slowly. &nbsp; ✦
      </div>
    </div>
  );
}

const maisonTopBtn = (active) => ({
  padding: '8px 14px',
  background: active ? 'var(--maison-ink)' : 'transparent',
  color: active ? 'var(--maison-bg)' : 'var(--maison-ink)',
  border: '1px solid var(--maison-ink-15)',
  fontFamily: 'var(--maison-mono)',
  fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase',
  cursor: 'pointer',
});

function ProfileRow({ k, v, accent }) {
  return (
    <div>
      <div style={{ fontFamily: 'var(--maison-mono)', fontSize: 9, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--maison-ink-50)', marginBottom: 2 }}>{k}</div>
      <div style={{ fontFamily: 'var(--maison-display)', fontSize: 18, color: accent || 'var(--maison-ink)', letterSpacing: '0.02em' }}>{v}</div>
    </div>
  );
}

function MaisonPairing({ rank, item, score, why, mode, viz, accent, layout, hovered, onHover, onLeave, inBoard, canBoard, onAdd, onRemove }) {
  const isList = layout === 'list';
  return (
    <div onMouseEnter={onHover} onMouseLeave={onLeave} style={{
      padding: isList ? '32px 0' : '32px 28px',
      background: hovered ? 'var(--maison-paper)' : 'var(--maison-bg)',
      borderBottom: isList ? '1px solid var(--maison-ink-15)' : 'none',
      transition: 'background 0.18s',
      display: 'grid',
      gridTemplateColumns: isList ? '60px 1fr auto auto' : '40px 1fr auto',
      gap: 24, alignItems: 'flex-start',
    }}>
      <div style={{ fontFamily: 'var(--maison-mono)', fontSize: 11, letterSpacing: '0.2em', color: 'var(--maison-ink-50)', paddingTop: 6 }}>
        № {String(rank).padStart(2, '0')}
      </div>
      <div style={{ minWidth: 0 }}>
        <div style={{ fontFamily: 'var(--maison-mono)', fontSize: 9, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--maison-ink-50)', marginBottom: 6 }}>
          {mode === 'wine' ? `${item.style} · ${item.region}` : `${catLabel(item.cat)} · ${item.region}`}
        </div>
        <div style={{ fontFamily: 'var(--maison-display)', fontSize: 32, lineHeight: 1, color: 'var(--maison-ink)', letterSpacing: '-0.02em', marginBottom: 12 }}>
          {item.name}
        </div>
        <div style={{ fontFamily: 'var(--maison-body)', fontSize: 15, fontStyle: 'italic', lineHeight: 1.55, color: 'var(--maison-ink-70)', maxWidth: 520, marginBottom: 10 }}>
          “{why}”
        </div>
        <div style={{ fontFamily: 'var(--maison-mono)', fontSize: 10, letterSpacing: '0.05em', color: 'var(--maison-ink-50)' }}>
          {item.notes}
        </div>
        {canBoard && (
          <button onClick={inBoard ? onRemove : onAdd} style={{
            marginTop: 14, padding: '7px 14px',
            background: inBoard ? accent : 'transparent',
            color: inBoard ? 'var(--maison-bg)' : accent,
            border: '1px solid ' + accent,
            fontFamily: 'var(--maison-mono)', fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase',
            cursor: 'pointer',
          }}>
            {inBoard ? '✓ on the board' : '+ add to board'}
          </button>
        )}
      </div>
      <MaisonScore score={score} viz={viz} accent={accent} />
    </div>
  );
}

function MaisonBoard({ wine, board, accent, onRemove, onClear }) {
  if (!wine) return null;
  if (board.length === 0) {
    return (
      <div style={{ margin: '0 40px 40px', padding: '28px', border: '1px dashed var(--maison-ink-15)', textAlign: 'center', fontFamily: 'var(--maison-display)', fontStyle: 'italic', fontSize: 18, color: 'var(--maison-ink-50)' }}>
        Build a cheese board for <span style={{ color: accent }}>{wine.name}</span> — add cheeses above.
      </div>
    );
  }
  const cheeses = board.map((id) => CHEESES.find((c) => c.id === id)).filter(Boolean);
  return (
    <div style={{ margin: '0 40px 40px', padding: '28px 32px', background: 'var(--maison-paper)', border: '1px solid var(--maison-ink-15)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 20 }}>
        <div>
          <div style={{ fontFamily: 'var(--maison-mono)', fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase', color: accent }}>
            Your board
          </div>
          <div style={{ fontFamily: 'var(--maison-display)', fontSize: 32, fontStyle: 'italic', letterSpacing: '-0.01em' }}>
            A {cheeses.length}-cheese board for <span style={{ color: accent }}>{wine.name}</span>
          </div>
        </div>
        <button onClick={onClear} style={{ background: 'transparent', border: '1px solid var(--maison-ink-15)', padding: '6px 12px', fontFamily: 'var(--maison-mono)', fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--maison-ink-70)', cursor: 'pointer' }}>
          Clear
        </button>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 16 }}>
        {cheeses.map((c, i) => (
          <div key={c.id} style={{ padding: '14px 0', borderTop: '1px solid var(--maison-ink-15)', position: 'relative' }}>
            <div style={{ fontFamily: 'var(--maison-mono)', fontSize: 9, letterSpacing: '0.25em', color: 'var(--maison-ink-50)' }}>
              № 0{i + 1}
            </div>
            <div style={{ fontFamily: 'var(--maison-display)', fontSize: 20, lineHeight: 1.1, marginTop: 4 }}>{c.name}</div>
            <div style={{ fontFamily: 'var(--maison-body)', fontSize: 12, fontStyle: 'italic', color: 'var(--maison-ink-50)', marginTop: 4 }}>{c.style}</div>
            <button onClick={() => onRemove(c.id)} style={{ position: 'absolute', top: 12, right: 0, background: 'transparent', border: 'none', color: 'var(--maison-ink-50)', cursor: 'pointer', fontSize: 18, lineHeight: 1, padding: 0 }}>×</button>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 20, paddingTop: 16, borderTop: '1px solid var(--maison-ink-15)', display: 'flex', gap: 24 }}>
        <div style={{ flex: 1, fontFamily: 'var(--maison-body)', fontSize: 13, fontStyle: 'italic', color: 'var(--maison-ink-70)' }}>
          <span style={{ fontFamily: 'var(--maison-mono)', fontSize: 9, letterSpacing: '0.25em', textTransform: 'uppercase', color: accent, fontStyle: 'normal', display: 'block', marginBottom: 6 }}>
            ✦ Sommelier note
          </span>
          Pull cheeses from the fridge 30 min before serving. Arrange mildest to strongest, clockwise. Open the wine 20 min ahead — let it breathe.
        </div>
      </div>
    </div>
  );
}

window.MaisonApp = MaisonApp;
