using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace JqueryAjax.devlec
{
    public partial class FormResponseData : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            Response.ContentType = "text/html";
            string html = "<div>Hello<div style=''>" + Request["Msg"] + /*"," + */ DateTime.Now.ToLongTimeString() + "</div></div>";
            Response.Clear();
            Response.Write(html);
            Response.End();
        }
    }
}