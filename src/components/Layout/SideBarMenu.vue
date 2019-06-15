<template>
    <div class="nav-aside">
        <div class="side-bar-menu">
            <div class="side-bar-menu-top">
                <a href="/" class="title">标题</a>
            </div>
            <el-menu
                class="side-bar-menu-list"
                :default-active="defaultActive"
                :default-openeds="defaultOpeneds"
            >
                <el-submenu
                    v-for="(item, index) in menuData"
                    :key="index"
                    :index="`${index}`"
                    :data-index="`${index}`"
                >
                    <template slot="title">
                        <i :class="`iconfont icon-${item.icon}`"></i>
                        <span>{{item.text}}</span>
                    </template>
                    <el-menu-item
                        v-for="(item2, index2) in item.children"
                        :key="index2"
                        :index="`${index}-${index2}`"
                        :data-index="`${index}-${index2}`"
                    >
                        <a :href="`${item2.url}.html`">{{item2.text}}</a>
                    </el-menu-item>
                </el-submenu>
            </el-menu>
        </div>
    </div>
</template>

<script>
import { menu as menuData } from 'data';
export default {
    props: {},
    data() {
        let defaultActive = '';
        let defaultOpeneds = [];
        const { pathname } = location;
        const path = pathname.replace('.html', '');
        if (path !== '/') {
            menuData.forEach((v, i) => {
                v.children.forEach((v2, i2) => {
                    if (v2.url === path) {
                        defaultActive = `${i}-${i2}`;
                    }
                });
            });
            if (!defaultActive) {
                menuData.forEach((v, i) => {
                    v.children.forEach((v2, i2) => {
                        const temp = path.split('/')[1];
                        if (v2.url.includes(temp)) {
                            defaultOpeneds = [`${i}`];
                        }
                    });
                });
            }
        }
        return {
            defaultActive,
            defaultOpeneds,
            menuData
        };
    }
};
</script>

<style lang="scss">
.el-submenu__title {
    padding-left: 15px !important;
}
.side-bar-menu-list.el-menu {
    background-color: #324157;
    border: none;
    .iconfont {
        padding-right: 5px;
    }
    .el-menu-item,
    .el-submenu__title,
    .el-submenu__icon-arrow,
    .iconfont {
        color: #bfcbd9;
    }
    .el-menu {
        background-color: #1f2d3d;
    }
    .el-menu-item.is-active {
        color: #20a0ff;
    }
    .el-menu-item:hover {
        background-color: #48576a;
    }
    .el-submenu__title:hover {
        background-color: #48576a;
    }
}
</style>

<style lang="scss" scoped>
.nav-aside {
    height: 100%;
}

.side-bar-menu {
    width: 200px;
    display: flex;
    flex: 1;
    flex-direction: column;
    height: 100%;
    background-color: #324057;
    -webkit-user-select: none;
    transition: width 0.3s;
    &.close {
        width: 50px;
        .el-submenu__icon-arrow {
            display: none;
        }
    }
}
.side-bar-menu-top {
    padding: 20px 0;
    line-height: 20px;
    text-align: center;
    font-size: 18px;
    color: #c0ccda;
    .title {
        display: block;
        height: 20px;
        overflow: hidden;
    }
}
.side-bar-menu-list {
    flex: 1;
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
}
.el-menu--collapse {
    width: 50px;
}
.el-submenu .el-menu-item {
    padding: 0 !important;
    a {
        display: block;
        height: 50px;
        padding-left: 40px;
        padding-right: 45px;
    }
}
</style>
