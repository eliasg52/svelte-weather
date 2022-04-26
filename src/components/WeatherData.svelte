<script lang="ts">
  export let weather;
</script>

<div class="col-12 col-md-6 animate__animated animate__fadeInUp">
  <img
    class="bg-secondary"
    src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
    alt=""
  />
  <h1>{weather.main.temp} °C</h1>
  <h4>City: <span class="fw-bold">{weather.name}</span></h4>
  <h4>
    Weather: <span class="fw-bold">{weather.weather[0].main}</span>
  </h4>
</div>
<div class="col-12 col-md-6 animate__animated animate__fadeInUp">
  <h4 class="mb-4">
    Maximum Temperature: <span class="fw-bold text-danger"
      >{weather.main.temp_max} °C</span
    >
  </h4>
  <h4>
    Minimium Temperature: <span class="fw-bold text-primary"
      >{weather.main.temp_min} °C</span
    >
  </h4>
</div>
