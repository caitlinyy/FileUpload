//导入Axios库，这是一个常用的HTTP客户端，用于发送HTTP请求。
import axios from 'axios'
//创建了一个名为instance的Axios实例。通过axios.create()方法，我们可以创建自定义配置的实例。设置基本的URL地址，这里是本地主机地址（localhost）和端口号80。这意味着在后续的请求中，将使用该基本URL作为请求的前缀，从而简化了请求的写法。
const instance = axios.create({ baseURL: "http://localhost:80" })
//在实例的默认请求头中设置了Content-Type。这是一个常见的设置，用于指定请求体的数据类型。在这种情况下，它被设置为multipart/form-data，这是一种常用的用于上传文件的数据类型。
instance.defaults.headers.common["Content-Type"] = "multipart/form-data"

export default instance

// 创建实例：通过创建Axios实例，我们可以使用不同的配置选项，例如设置基本URL、默认请求头等。这样可以避免在每个请求中重复设置这些配置项，提高代码的重用性和可维护性。

// 基本URL：通过设置基本URL，我们可以在后续的请求中只提供相对路径，从而简化请求的书写和管理。此外，如果要更改基本URL，只需要在创建实例的地方修改一次即可。

// 默认请求头：在这段代码中，将Content-Type设置为multipart/form-data，这是一种常见的用于上传文件的数据类型。这样，在后续的请求中，默认请求头会自动包含该设置，无需在每个请求中手动指定。

// 综上所述，这段代码的目的是创建一个Axios实例，设置了基本URL和默认请求头，以方便后续的HTTP请求操作，并且提供了一些常用的配置，提高了代码的可重用性和可维护性。