/* =================================
   NEON / MEGA NEON SYSTEM
   ================================= */

.variant-title {
  margin: 20px 0 12px;
  font-size: 14px;
  font-weight: 700;
  opacity: .7;
}

.variant-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}

.variant-card {
  border: 1px solid rgba(255,255,255,.08);
  background: rgba(255,255,255,.035);
  color: inherit;
  border-radius: 16px;
  padding: 22px 12px;
  cursor: pointer;
  text-align: center;
  transition: .2s;
}

.variant-card:hover {
  transform: translateY(-3px);
  background: rgba(255,255,255,.07);
}

.variant-icon {
  font-size: 38px;
  margin-bottom: 12px;
}

.variant-card strong {
  display: block;
  font-size: 15px;
}

.variant-card span {
  display: block;
  margin-top: 6px;
  font-size: 12px;
  opacity: .55;
}

.variant-card.neon {
  border-color: rgba(120,220,255,.25);
}

.variant-card.mega {
  border-color: rgba(190,120,255,.3);
}

.variant-back {
  width: 100%;
  margin-top: 15px;
  padding: 12px;
  border: 0;
  border-radius: 10px;
  background: rgba(255,255,255,.05);
  color: inherit;
  cursor: pointer;
}


/* =================================
   QUANTITY
   ================================= */

.quantity-controls {
  display: flex;
  align-items: center;
  gap: 7px;
  margin-left: auto;
}

.quantity-controls button {
  width: 28px;
  height: 28px;
  border: 0;
  border-radius: 8px;
  background: rgba(255,255,255,.07);
  color: inherit;
  font-size: 17px;
  cursor: pointer;
}

.quantity-controls button:hover {
  background: rgba(255,255,255,.13);
}

.quantity-controls span {
  min-width: 32px;
  text-align: center;
  font-size: 13px;
  font-weight: 700;
}


/* =================================
   PET SELECT BUTTON
   ================================= */

.pet-select-button {
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1;
  min-width: 0;
  border: 0;
  background: transparent;
  color: inherit;
  text-align: left;
  cursor: pointer;
}

.pet-select-button:hover {
  opacity: .85;
}

.pet-option {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  margin-bottom: 8px;
  padding: 9px;
  border-radius: 12px;
  background: rgba(255,255,255,.025);
  border: 1px solid rgba(255,255,255,.06);
}

.favorite-button {
  width: 38px;
  height: 38px;
  flex-shrink: 0;
  border: 0;
  border-radius: 10px;
  background: rgba(255,255,255,.05);
  color: #777;
  font-size: 22px;
  cursor: pointer;
}

.favorite-button.active {
  color: #ffd84d;
  background: rgba(255,216,77,.10);
}


/* =================================
   MOBILE
   ================================= */

@media (max-width: 600px) {

  .variant-grid {
    grid-template-columns: 1fr;
  }

  .variant-card {
    padding: 15px;
  }

  .variant-icon {
    font-size: 30px;
    margin-bottom: 6px;
  }

  .quantity-controls {
    gap: 4px;
  }

  .quantity-controls button {
    width: 25px;
    height: 25px;
  }
}
