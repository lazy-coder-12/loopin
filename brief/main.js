/**
 * Loop'in Interactive Brief - Client-side Controller
 * Features:
 * - Dynamic scroll-triggered animations for charts & range bars (using IntersectionObserver)
 * - Hover tooltip & highlight behavior for graph bars
 * - Interactive Ticker controls (Pause on interaction)
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize all interactive components
  initBarChartAnimation();
  initRangeBarAnimation();
  initTickerInteraction();
});

/**
 * Animated India Bar Chart Heights
 * Triggered when the element scrolls into view.
 */
function initBarChartAnimation() {
  const barsContainer = document.getElementById('barsChart');
  if (!barsContainer) return;

  const bars = barsContainer.querySelectorAll('.bar');

  // Set initial height to 0%
  bars.forEach(bar => {
    bar.style.height = '0%';
  });

  // Intersection Observer to trigger graph animations when scrolled into view
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        bars.forEach((bar, index) => {
          const targetHeight = bar.getAttribute('data-h');
          // Staggering animation slightly for visual polish
          setTimeout(() => {
            bar.style.height = targetHeight + '%';
          }, index * 100);
        });
        obs.unobserve(entry.target); // Trigger animation once
      }
    });
  }, { threshold: 0.3 });

  observer.observe(barsContainer);
}

/**
 * Animated Range Bars (Global Market Size Indicator)
 */
function initRangeBarAnimation() {
  const rangeTracks = document.querySelectorAll('.range-track');

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const track = entry.target;
        const fill = track.querySelector('.range-fill');
        const dot = track.querySelector('.dot2');
        const percentage = track.getAttribute('data-percentage');

        if (fill && dot && percentage) {
          fill.style.width = percentage + '%';
          dot.style.left = percentage + '%';
        }
        obs.unobserve(track);
      }
    });
  }, { threshold: 0.5 });

  rangeTracks.forEach(track => observer.observe(track));
}

/**
 * Pause / Resume Ticker logic for touch & mouse events
 */
function initTickerInteraction() {
  const ticker = document.getElementById('tickerBanner');
  if (!ticker) return;

  const track = ticker.querySelector('.ticker-track');

  // Pause on click or touch toggle for mobile accessibility
  ticker.addEventListener('click', () => {
    const isPaused = track.style.animationPlayState === 'paused';
    track.style.animationPlayState = isPaused ? 'running' : 'paused';
  });
}