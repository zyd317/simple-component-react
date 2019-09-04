/**
 * 打包的每个分类常用组件，可以按需加载
 */
import CustomComponent from './CustomComponent';
import Sys from './SystemComponent';
const {SystemComponent, Animation, ConfirmDialog, PopAlert} = Sys;
import Dialog from './Dialog';
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
};
