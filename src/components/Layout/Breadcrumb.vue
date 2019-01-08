<template>
    <div class="crumb">
        <div class="el-breadcrumb box">
            <span class="el-breadcrumb__item" v-for="(item, index) in data">
                <a v-if="getUrl(index)" :href="getUrl(index)">{{item[0]}}</a>
                <span v-else>{{item[0]}}</span>
                <span class="el-breadcrumb__separator">/</span>
            </span>
        </div>
    </div>
</template>

<script>
import {crumb} from 'data';

export default {
    data() {
        const path = window.location.pathname.slice(1, -5);
        const data = crumb[path] || [];
        return {data};
    },
    methods: {
        getUrl(index) {
            return this.data[index][1];
        }
    }
};
</script>

<style lang="less">
.box {
    cursor: default;
    padding: 10px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    &:empty {
        display: none;
    }
}
</style>
