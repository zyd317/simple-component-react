/**
 * Created by yidi.zhao on 2018/5/11.
 */
export function createEvent(name: string, data: object):Event {
    let event, createEvent = document.createEvent
        ? (name: string, data: object) => {
            event = document.createEvent('HTMLEvents');
            if(!event){
                return null;
            }
            event.initEvent(name, true, true);
            // @ts-ignore
            event.detail = data;
            return event;
        }
        : (name: string, data: object) => {
            // @ts-ignore
            event = document.createEventObject();
            event.eventType = name;
            event.detail = data;
            return event;
        };
    return createEvent(name, data);
}

export function dispatchEvent(element: Window, event: Event) {
    const triggerEvent = document.createEvent
        ? (element:Window, event:Event) => {
            // @ts-ignore
            element.dispatchEvent(event);
        }
        : (element:Window, event: Event) => {
            // @ts-ignore
            element.fireEvent('on' + event.eventType, event);
        };
    return triggerEvent(element, event);
}