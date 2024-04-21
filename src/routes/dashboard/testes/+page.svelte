<script lang="ts">
	import { observe, default_params_action, type Params_action } from '$lib/actions/observerAction'

  let fn_test = (v: any) => {
    console.log('V', v.detail);
    
  }

</script>

<style lang="scss">
  .el-test {
    padding: 8px;
    background: cadetblue;
  }
  .t2 { height: 888px; }
</style>


<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
<div class="el-test" on:emit={fn_test} use:observe={default_params_action}>1</div>

<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
<div class="el-test t2" on:emit={fn_test} use:observe={default_params_action}>2</div>