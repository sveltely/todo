<script>
  import {repairs} from './store';

  import {find, update, reject} from 'lodash';
  
  export let id, description, completed;

  let checked = completed;
  
  const toggleCompleted = () => {
    let repair = find($repairs, {id});
    update(repair, 'completed', x => !x);
    repairs.set($repairs);
  };

  const deleteRepair = () => repairs.set(reject($repairs, {id}));
</script>

<li data-id="2" class:completed>
  <div class="view">
    <input
      class="toggle"
      type="checkbox"
      bind:checked
      on:click={toggleCompleted}
    />
    <label>{description}</label>
    <button class="destroy" on:click={deleteRepair} />
  </div>
</li>
