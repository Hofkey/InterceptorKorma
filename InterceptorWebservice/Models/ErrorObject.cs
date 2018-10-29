using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace InterceptorWebservice.Models
{
    public class ErrorObject
    {
        public int Code { get; set; }
        public string Title { get; set; }
        public string Message { get; set; }
        public readonly bool IsError = true;
    }
}