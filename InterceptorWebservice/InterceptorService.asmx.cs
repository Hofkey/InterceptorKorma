using InterceptorWebservice.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Script.Serialization;
using System.Web.Script.Services;
using System.Web.Services;

namespace InterceptorWebservice
{
    /// <summary>
    /// Summary description for InterceptorService
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    [System.Web.Script.Services.ScriptService]
    public class InterceptorService : System.Web.Services.WebService
    {
        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public object HelloWorld()
        {
            var err = new ErrorObject() { Code = 433, Message = "custom error", Title = "FOUT OPGETREDEN" };
            JavaScriptSerializer js = new JavaScriptSerializer();
            return js.Serialize(err);
        }
    }
}
