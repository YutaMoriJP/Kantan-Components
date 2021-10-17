import * as React from "react";
declare type Headers = {
    "Content-Type": string;
    [key: string]: any;
};
declare type Option = {
    method: "GET";
    headers: Headers;
    [key: string]: string | Headers;
};
declare type DownLoadProps = {
    url: string | Blob;
    fileName: string;
    wait?: boolean;
    children?: string;
    pending?: string;
    idle?: string;
    options?: Option;
    onOpen?: () => void;
    setMessageText?: React.Dispatch<React.SetStateAction<object>>;
};
/**
 *
 * @param {String | Object} url - The `url` can be the endpoint of an API or a `Blob` object instance. See the examples to make sense of it.
 * @param {String} fileName -Controls the file name, like `file.txt`. Note that the `extension` controls what kind of file it is. If the download content is an image, then using the `txt` extension will not work.
 * @param {Boolean} wait - The `wait` prop controls whether you want the download link to be generated right after the component is mounted or not. Note that if it's not a `Blob` object, and the content is served across the network, then a HTTP request is sent. So it's up to you to wait for the request to be sent, which happens after a click event. If `wait` is true, then the download link is generated after a click event is fired. Default value is `true`.
 * @param {String} pending -  The `pending` state controls what will be displayed while the network is happening. The default is `Loading...
 * @param {String } children - The `children` prop controls what will be displayed after the download link is ready. The default is `Download ${fileName}
 * @param {String} idle - If you pass the boolean value `true` to the `wait` prop, then the `idle` prop can be used to pass a default text value while status is `idle`. Something like `Generate download link` would make sense. The default is `Generate ${fileName} download link`.
 * @param {Object} options - If the request can only be send by authroized users, like with the `Authorization` header or `app-id` header, then you can pass an option object, which will be passed as the second argument to the `fetch` API, like `fetch(url, option)`. So, your `options` object should look like `{method: "GET", headers: { Authorization: "Bearer ${API_KEY}" }}`.
 **/
declare const Download: ({ url, fileName, wait, pending, idle, children, options, onOpen, setMessageText, }: DownLoadProps) => JSX.Element;
export default Download;
