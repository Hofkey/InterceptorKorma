using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KormaErrorReporter.Helpers
{
    class ClientHelper
    {
        private readonly Http.Controller controller;

        public ClientHelper(Http.Controller _controller)
        {
            controller = _controller;
        }

        public int GetClientId(string client)
        {
            try
            {
                return Convert.ToInt32(controller.GetClientData(client));
            }
            catch(Exception ex)
            {
                throw new Exception("API did not return a valid response!", ex);
            }
        }
    }
}
