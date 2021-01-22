<script>
  import {repairs} from './store';

  import {reject} from 'lodash';
  import {pluralize} from 'flowdash';

  const clearCompleted = () => repairs.set(reject($repairs, 'completed'));
  
  $: status = pluralize($repairs.length, 'repair', 'repairs');
</script>

<button class="clear-completed" on:click={clearCompleted}
  >Clear completed</button
>

<div>{status}</div>
