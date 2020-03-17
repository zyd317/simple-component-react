/**
 * 打包的每个分类常用组件，可以按需加载
 */
import CustomComponent from './CustomComponent';
import Sys from './HooksComponent';
const {SystemComponent, Animation, ConfirmDialog, PopAlert, ComponentWrapper} = Sys;
import Dialog from './Dialog';
import BigDialog from './BigDialog';
import HoverAlert from './HoverTips';
import ClickTips from './ClickTips';
import Select from './Select';
export {
    Select,
    CustomComponent,
    Animation,
    ConfirmDialog,
    PopAlert,
    HoverAlert,
    ClickTips,
    Dialog,
    SystemComponent,
    BigDialog,
    ComponentWrapper
};
