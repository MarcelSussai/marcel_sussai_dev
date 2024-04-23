<script lang="ts">
	import { observe, type Observe_result } from '$lib/actions/observe'



  let is_visible: boolean | undefined = false


  const fn_test_1 = ({ detail }: CustomEventInit<Observe_result>) => {
    is_visible = detail?.is_only_by_bottom
  }

</script>

<style lang="scss">
  .el-test {
    width: 80px;
    height: 80px;
    padding: 8px;
    background: cadetblue;
    transition: all .6s var(--cubic-easeInOutSine);
    opacity: 0;
  }
  .t2 { height: 400px; }
  .visible {
    opacity: 1;
    background: red;
  }
</style>

<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
<div
  class="el-test t2 { is_visible ? 'visible' : '' }"
  on:intersect={ fn_test_1 } use:observe={ { steps: 10, percent_by: 16 } }
>1</div>
