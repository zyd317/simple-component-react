/**
 * Created by yidi.zhao on 2018/5/11.
 */
export function createEvent(name, data) {
    let event, createEvent = document.createEvent
        ? (name, data) => {
            event = document.createEvent('HTMLEvents');
            if (!event) {
                return null;
            }
            event.initEvent(name, true, true);
            // @ts-ignore
            event.detail = data;
            return event;
        }
        : (name, data) => {
            // @ts-ignore
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
            // @ts-ignore
            element.dispatchEvent(event);
        }
        : (element, event) => {
            // @ts-ignore
            element.fireEvent('on' + event.eventType, event);
        };
    return triggerEvent(element, event);
}
//# sourceMappingURL=eventUtils.jsx.map