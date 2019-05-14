<template>
    <span>
        <ui-icon-button icon="block" @change="onToolClick('None')"></ui-icon-button>
        <ui-icon-button icon="open_with" @change="onToolClick('MoveObj')"></ui-icon-button>
        <ui-icon-button icon="show_chart" @change="onToolClick('LineAdd')"></ui-icon-button>
        <ui-icon-button icon="gesture" @change="onToolClick('BezierAdd')"></ui-icon-button>
        <ui-icon-button icon="delete" @change="onToolClick('DelObj')"></ui-icon-button>
        <ui-icon-button icon="build" @change="onToolClick('MovePoint')"></ui-icon-button>
        <ui-icon-button @change="onToolClick('BSplineAdd')">B</ui-icon-button>
        
    </span>
</template>


<script lang="ts">
import { Component, Prop, Vue,Watch } from 'vue-property-decorator';
import {ToolType} from '@/scripts/DPainter'
@Component
export default class Toolbar extends Vue {

    onToolClick(name:string){
        let tool:ToolType;
        switch(name){
            case "MoveObj":
                tool = ToolType.MoveObj;
                break;
            case "LineAdd":
                tool = ToolType.LineAdd;
                break;
            case "BezierAdd":
                tool = ToolType.BezierAdd;
                break;
            case "BSplineAdd":
                tool = ToolType.BSplineAdd;
                break;
            case "DelObj":
                tool = ToolType.DelObj;
                break;
            case "MovePoint":
                tool = ToolType.MovePoint;
                break;
            default:
                tool = ToolType.None;
                break;
        }
        this.$emit("change",tool);
    }
}
</script>
