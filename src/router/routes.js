import Home from "@/views/Home"
import Blog from "@/views/Blog"
import About from "@/views/About"
import Project from "@/views/Project"
import Chat from "@/views/Chat"
import BlogDetail from "@/views/Blog/Detail"


export default [
    {
      name:"Home",
      path:"/",
      component:Home,
      meta:{
        title:"主页"
      }
    },
    {
      name:"Blog",
      path:"/Blog",
      component:Blog,
      meta:{
        title:"博客"
      }
    },
    {
      name:"CategoryBlog",
      path:"/Blog/cate/:categoryId",
      component:Blog,
      meta:{
        title:"博客"
      }
    },
    {
      name:"BlogDetail",
      path:"/Blog/:Id",
      component:BlogDetail,
      meta:{
        title:"博客详情"
      }
    },
    {
      name:"About",
      path:"/About",
      component:About,
      meta:{
        title:"关于我"
      }
    },
    {
      name:"Project",
      path:"/Project",
      component:Project,
      meta:{
        title:"项目&效果"
      }
    },
    {
      name:"Message",
      path:"/Chat",
      component:Chat,
      meta:{
        title:"留言版"
      }
    },
  ]