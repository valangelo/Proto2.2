<script>
  export let name;
  export let className;
  export let iconUrl;
</script>

<li class={className} style={`--icon-url: url('${iconUrl}');`}>
  {name}
</li>

<style lang="scss">
  li {
    position: relative;
    padding-left: 40px; /* Space for the custom marker */
    margin-bottom: 10px;
    list-style-type: none; /* Remove default bullets */
  }

  li::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    width: 20px; /* Width of the custom marker */
    height: 20px; /* Height of the custom marker */
    background-image: var(--icon-url);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    transform: translateY(-50%);
  }
</style>