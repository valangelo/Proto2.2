<script lang="ts">
  export let id: string;
  export let title: string;
  export let image: string;
  export let url: string;
  export let backstory: string;
  export let background: string;

  let dialogElement: HTMLDialogElement;

  export function open() {
    document.documentElement.style.setProperty(
      "--backdrop-image",
      `url(${background})`
    );
    dialogElement.showModal();
  }

  function close() {
    dialogElement.close();
    document.documentElement.style.removeProperty("--backdrop-image");
  }

  function redirectTo() {
    window.location.href = url;
  }
</script>

<dialog bind:this={dialogElement} id={id} class="dialog">
  <header class="dialog__header">
    <img src={image} alt={title} class="dialog__image" />
    <h2 class="dialog__title">{title}</h2>
  </header>

  <div class="dialog__body">
    {@html backstory}
  </div>

  <footer class="dialog__actions">
    <button on:click={redirectTo}>Open Project</button>
    <button on:click={close}>Close</button>
  </footer>
</dialog>

<style lang="scss">
@import "../styles/base/mixins";
@include font-face("Neucha", "Neucha/Neucha-Regular");
.dialog {
  // @include doodleBorder(2);
  @include doodleElement(2,2);
  & {
  font-size: $font-size-md;
  font-family: "Neucha";
  // color: red;
  position: fixed;
  inset: 0;
  margin: auto;
  max-width: 700px;
  width: 90%;
  padding: 2rem;
  // border: none;
  // border-radius: 1rem;
  background-color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(20px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }

  &__header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
  }

  &__image {
    width: 5rem;
    height: 5rem;
    object-fit: contain;
    border-radius: 0.5rem;
  }

  &__title {
    font-size: 1.75rem;
    font-weight: bold;
  }

  &__body {
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 2rem;
  }

  &__actions {
    display: flex;
    justify-content: flex-end;
    gap: 1rem;

    button {
      // @include doodleButton(1);
      @include doodleElement(2);
      &{
        padding: 0.5rem 1.25rem;
        cursor: pointer;
        transition: transform 0.2s ease, background-color 0.2s ease;
      }

      &:hover {
        // background-color: #eee;
        transform: translateY(-2px);
      }
    }
  }
}

::backdrop {
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(20px);
}

</style>
