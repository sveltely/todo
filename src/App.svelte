<script>
  import {repairs} from './store';

  import Repair from './Repair.svelte';
  import Controls from './Controls.svelte';

  import {v4 as uuidv4} from 'uuid';
  import {concat, chunk} from 'lodash';

  let description = '';
  let currentPage = 0;

  const addItem = e => {
    e.preventDefault();

    if (description !== '') {
      repairs.set(
        concat($repairs, {id: uuidv4(), description, completed: false})
      );

      description = '';
    }
  };

  $: pages = chunk($repairs, 5)[currentPage] || [];
  $: localStorage.setItem('repairs', JSON.stringify($repairs));
</script>

<section class="fixmeapp">
  <header class="header">
    <h1>rep🔥irs</h1>
    <form on:submit={addItem}>
      <input
        class="new-repair"
        placeholder="What needs to be repaired?"
        bind:value={description}
        autofocus="true"
      />
    </form>
  </header>
  <section class="main">
    <ul class="repair-list">
      {#each pages as repair (repair.id)}
        <Repair {...repair} />
      {/each}
    </ul>
  </section>
  <footer class="footer">
    <Controls />
  </footer>
</section>
