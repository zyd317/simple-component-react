interface Document {
    createEventObject: ()=>any;
}
interface Window {
    ComponentManager: ComponentMane;
    SystemComponent: ComponentMane;
    SystemComponentTouch: ComponentMane;

    fireEvent(s: string, event: any): void;
}
interface ComponentMane {
    open: (comp: string, config: any) => void;
    update: (comp: string, config: any) => void;
    close: (comp: string) => void;
    _action: (comp: string, config: any, action: 'open' | 'update' | 'close') => void;
}

declare namespace SimpleComponentReact {
    interface ComponentWrapperProps {
        readonly classNa?: string;
        [key: string]: any;
    }
    interface ComponentWrapperState {
        readonly renderCompName: string;
    }
    interface ComponentWrapperEventDetail {
        readonly action: string;
        readonly config: any;
        readonly name: string;
    }
    interface ComponentWrapperEventDetail {
        readonly action: string;
        readonly config: any;
        readonly name: string;
    }

    interface DialogTouchProps {
        title?: string;
        customClassName?: string;
        children?: any;
        btnTextSure?: string;
        btnTextCancel?: string;
        handleSure?: () => void;
        handleClose?: () => void;
    }
    interface ButtonItem {
        fn?: () => void;
        text?: string;
        className?: string;
        type?: string;
    }
    interface DialogProps {
        showCloseIcon?: boolean;
        buttons?: ButtonItem[];
        close?: () => void;
        title?: string;
        customClassName?: string;
        children?: any;
    }

    interface ConfirmDialogProps {
        handleClose: () => void;
    }
    interface ConfirmDialogState {
        contentType?: 'confirm' | 'alert';
        hide: boolean;
        title?: string;
        content: string;
        btnTextSure?: string;
        btnTextCancel?: string;
        handleSure?: () => void;
        handleClose?: () => void;
    }

    interface HoverContainerProps {
        tips?: string;
        className?: string;
        position?: 'top' | 'left' | 'right' | 'bottom';
        children?: any;
        icon?: string | Element;
        [key: string]: any;
    }

    interface PopAlertProps {
        delayTime: number;
        noHide: boolean;
        handleClose: () => void;
    }
    interface PopAlertState {
        content: string;
        status: string;
        hide: boolean;
        delayTime: number;
        noHide: boolean;
    }

    interface SelectProps {
        options: any;
        value: string;
        position: 'top' | 'bottom';
        placeholder: string;
        className?: string;
        disabled: boolean;
        onChange: (value: string) => void;
    }
    interface SelectState {
        showOption: boolean;
    }

    interface AnimationProps {
        handleClose: () => void;
        supportAnimate: boolean;
    }
    interface AnimationState {
        status: string; // 'init' | 'animating';
    }
    interface BeWrappedComponentType {
        defaultProps: {
            supportAnimate: boolean;
        };
        [key: string]: any;
    }
}
