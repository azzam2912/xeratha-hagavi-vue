<template>
  <div class="unsur">
    <i>
      <slot name="ikon"></slot>
    </i>
    <div class="detil">
      <h3>
        <slot name="kepala"></slot>
      </h3>

      <h7>
        <slot name="tanggal"></slot>
      </h7>
      
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.unsur {
  margin-top: 2rem;
  display: flex;
  position: relative;
}

.detil {
  flex: 1;
  margin-left: 1rem;
}

i {
  display: flex;
  place-items: center;
  place-content: center;
  width: 32px;
  height: 32px;

  color: var(--color-text);
}

h3 {
  font-size: 1.3rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
}

h7 {
  font-size: 1.13rem;
  font-weight: 400;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
}

@media (min-width: 1024px) {
  .unsur {
    margin-top: 0;
    padding: 0.4rem 0 1rem calc(var(--section-gap) / 2);
  }

  i {
    top: calc(50% - 25px);
    left: -26px;
    position: absolute;
    border: 1px solid var(--color-border);
    background: var(--color-background);
    border-radius: 8px;
    width: 50px;
    height: 50px;
  }

  .unsur:before {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    bottom: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .unsur:after {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    top: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .unsur:first-of-type:before {
    display: none;
  }

  .unsur:last-of-type:after {
    display: none;
  }
}
</style>
