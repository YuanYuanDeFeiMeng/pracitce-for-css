<template>
    <div>
        <p>这里是公用的组件</p>
        <div>
            {{ name }}
            <p>这里是props中的here{{ here }}</p>
            <div>
                <p v-for="item in items" :key="item">
                    {{ item }}
                </p>
            </div>
        </div>

        <el-button type="primary" @click="ownClick()">哇哇哇</el-button>
    </div>
</template>

<script>
export default {
    props: {
        'here': {
            default: 111
        },
        'name': {
            default: 222
        },
        'items': {
            default: [333,444,555]
        },
        'ownClick': {
            default (){
                console.log(this.props);
            }
        }
    }
}
</script>
