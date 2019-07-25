/**
 * Created by yidi.zhao on 2018/5/11.
 */
export function createEvent (name: string, data: any) {
    let event: any;
    const createEvent = document.createEvent
        ? (name: string, data: any) => {
            event = document.createEvent('HTMLEvents');
            event.initEvent(name, true, true);
            event.detail = data;
            return event;
        }
        : (name: string, data: any) => {
            event = document.createEventObject();
            event.eventType = name;
            event.detail = data;
            return event;
        };
    return createEvent(name, data);
}

export function dispatchEvent (element: Window, event: any) {
    const triggerEvent = document.createEvent
        ? (element: Window, event: any) => {
            element.dispatchEvent(event);
        }
        : (element: Window, event: any) => {
            element.fireEvent('on' + event.eventType, event);
        };
    return triggerEvent(element, event);
}
