<script lang="ts">
  import ErrorAltert from './ErrorAltert.svelte';
  import Loading from './Loading.svelte';
  import WeatherData from './WeatherData.svelte';
  import { getWeatherData } from './getData';

  let city = '';
  let promise = getWeatherData();

  const handleSubmit = () => {
    promise = getWeatherData(city);
    city = '';
  };
</script>

<div class="container">
  <div class="row">
    <div class="col-12 mb-5 animate__backInLeft animate__animated mr-3">
      <form on:submit|preventDefault={handleSubmit}>
        <label for="">
          Search City: <input
            bind:value={city}
            type="text"
            class="form-control"
          />
        </label>

        <button class="p-2" type="submit">Search</button>
      </form>
    </div>

    {#await promise}
      <Loading />
    {:then weather}
      <WeatherData {weather} />
    {:catch error}
      <ErrorAltert {error} />
    {/await}
  </div>
</div>
