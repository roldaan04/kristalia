import { useCallback, useRef, useState } from 'react';
import './BeforeAfterSlider.css';

const KEY_STEP = 5;

const clamp = (value) => Math.min(100, Math.max(0, value));

export default function BeforeAfterSlider({
  before,
  after,
  beforeAlt,
  afterAlt,
  width,
  height,
  focusable = true,
}) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef(null);
  const draggingRef = useRef(false);

  const updateFromClientX = useCallback((clientX) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect || rect.width === 0) return;
    setPosition(clamp(((clientX - rect.left) / rect.width) * 100));
  }, []);

  const handlePointerDown = (event) => {
    if (event.button !== undefined && event.button !== 0) return;
    draggingRef.current = true;
    event.currentTarget.setPointerCapture?.(event.pointerId);
    updateFromClientX(event.clientX);
  };

  const handlePointerMove = (event) => {
    if (draggingRef.current) updateFromClientX(event.clientX);
  };

  const stopDragging = () => {
    draggingRef.current = false;
  };

  const handleKeyDown = (event) => {
    const keyMap = {
      ArrowLeft: position - KEY_STEP,
      ArrowDown: position - KEY_STEP,
      ArrowRight: position + KEY_STEP,
      ArrowUp: position + KEY_STEP,
      Home: 0,
      End: 100,
    };
    if (!(event.key in keyMap)) return;
    event.preventDefault();
    // Evita que las flechas también muevan el carrusel.
    event.stopPropagation();
    setPosition(clamp(keyMap[event.key]));
  };

  return (
    <div
      ref={containerRef}
      className="ba-slider"
      style={{ '--ba-pos': `${position}%` }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={stopDragging}
      onPointerCancel={stopDragging}
      // El gesto horizontal pertenece al comparador, no al carrusel.
      onTouchStart={(event) => event.stopPropagation()}
    >
      <img
        className="ba-slider__img"
        src={after}
        alt={afterAlt}
        width={width}
        height={height}
        loading="lazy"
        decoding="async"
        draggable="false"
      />
      <div className="ba-slider__before">
        <img
          className="ba-slider__img"
          src={before}
          alt={beforeAlt}
          width={width}
          height={height}
          loading="lazy"
          decoding="async"
          draggable="false"
        />
      </div>

      <span className="ba-slider__label ba-slider__label--before" aria-hidden="true">Antes</span>
      <span className="ba-slider__label ba-slider__label--after" aria-hidden="true">Después</span>

      <div className="ba-slider__divider" aria-hidden="true" />
      <div
        className="ba-slider__handle"
        role="slider"
        tabIndex={focusable ? 0 : -1}
        aria-label="Comparar antes y después de la limpieza"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(position)}
        aria-valuetext={`${Math.round(position)} % de la imagen de antes visible`}
        onKeyDown={handleKeyDown}
      >
        <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false">
          <path d="M9 6l-6 6 6 6M15 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  );
}
