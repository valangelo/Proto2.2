<script lang="ts">
  export let name: string;
  export let className: string;
  export let iconUrl: string | null = null;
</script>


<li
  class={className}
  style={iconUrl ? `--icon-url: url(${iconUrl})` : ''}
>
  <span>{name}</span>
</li>



<style lang="scss">
  li {
    position: relative;
  padding-left: 40px;
  margin-bottom: 10px;
  list-style-type: none;
  }

  li::before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    width: 20px;
    height: 20px;
    background-image: var(--icon-url);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    transform: translateY(-50%);
    filter: contrast(30%) brightness(90%);
  }

  li:hover::before {
    filter: contrast(70%) brightness(100%)
      drop-shadow(2px 2px 1px rgba(0, 0, 0, 0.3));
    transform: translateY(-50%) scale(1.1);
    transition: filter 0.3s ease, transform 0.3s ease;
  }
</style>
