<template>
    <div class="layout">
        <SideBarMenu></SideBarMenu>
        <div class="main">
            <HeaderMenu></HeaderMenu>
            <Breadcrumb></Breadcrumb>
            <div class="content">
                <slot name="content"></slot>
            </div>
        </div>
    </div>
</template>

<script>
import SideBarMenu from './SideBarMenu';
import HeaderMenu from './HeaderMenu';
import Breadcrumb from './Breadcrumb';

export default {
    name: 'layout',
    components: {
        SideBarMenu,
        HeaderMenu,
        Breadcrumb
    },
    data() {
        return {
            show: true
        };
    }
};
</script>

<style lang="scss" scoped>
.layout {
    height: 100%;
    display: flex;
    .main {
        flex: 1;
        display: flex;
        flex-direction: column;
    }
    .content {
        flex: 1;
        overflow-x: hidden;
        overflow-y: auto;
        padding: 10px;
        & > div > * {
            margin-top: 10px;
            &:first-child {
                margin-top: 0;
            }
        }
    }
}
</style>
