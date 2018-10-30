using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KormaErrorReporter.Models
{
    class ErrorModel
    {
        public int Client { get; set; }
        public string App { get; set; }
        public DateTime Time { get; set; }
        public Exception Ex { get; set; }
    }
}
