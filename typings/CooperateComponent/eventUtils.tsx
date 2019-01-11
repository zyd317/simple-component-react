/**
 * Created by yidi.zhao on 2018/5/11.
 */
export function createEvent(name, data) {
    let event, createEvent = document.createEvent
        ? (name, data) => {
            event = document.createEvent('HTMLEvents');
            event.initEvent(name, true, true);
            event.detail = data;
            return event;
        }
        : (name, data) => {
            event = document.createEventObject();
            event.eventType = name;
            event.detail = data;
            return event;
        };
    return createEvent(name, data);
}

export function dispatchEvent(element, event) {
    const triggerEvent = document.createEvent
        ? (element, event) => {
            element.dispatchEvent(event);
        }
        : (element, event) => {
            element.fireEvent('on' + event.eventType, event);
        };
    return triggerEvent(element, event);
}