<template>
  <div id="app">
    <mu-appbar title="茂奂建材有限公司">
      <mu-icon value="exit_to_app" :size="36" slot="right"/>
    </mu-appbar>
    <div class="flex-container">
      <div class="menu-list">
        <mu-list>
          <mu-list-item  title="磅房" class="menuType">
            <mu-icon value="devices" slot="left"/>
          </mu-list-item>
          <mu-list-item title="录入过磅单" inset>
          </mu-list-item>
          <mu-list-item  title="打印过磅单" inset>
          </mu-list-item>

          <mu-list-item  title="出售" class="menuType">
            <mu-icon value="local_shipping" slot="left"/>
          </mu-list-item>
          <mu-list-item  title="录入出货单" inset>
          </mu-list-item>
          
          <mu-list-item  title="查询" class="menuType">
            <mu-icon value="search" slot="left"/>
          </mu-list-item>
          <mu-list-item  title="出货单查询" inset>
          </mu-list-item>
          <mu-list-item  title="过磅单查询" inset>
          </mu-list-item>
          
          <mu-list-item  title="统计" class="menuType">
            <mu-icon value="equalizer" slot="left"/>
          </mu-list-item>
          <mu-list-item  title="根据施工单位统计" inset>
          </mu-list-item>
          <mu-list-item  title="根据司机统计" inset>
          </mu-list-item>
          <mu-list-item  title="当日统计" inset>
          </mu-list-item>
        
          <mu-list-item  title="财务" class="menuType" >
            <mu-icon value="monetization_on" slot="left"/>
          </mu-list-item>
          <mu-list-item  title="材料结算" inset>
          </mu-list-item>
          <mu-list-item  title="运费结算" inset>
          </mu-list-item>
          <mu-list-item  title="混凝土结算" inset>
          </mu-list-item>
        </mu-list>
      </div>
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      value: 1,
    }
  }
}
</script>

<style>
.flex-container {
  display: flex;
  font-family: '微软雅黑';
}
.menu-list {
  flex: 0 0 230px;
  border-right: 3px solid #efebe9;
}
.content {
  flex: 1 1 auto;
  padding: 50px;
}
.menuType {
  background: #efebe9;
}
</style>
