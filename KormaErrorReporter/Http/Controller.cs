using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KormaErrorReporter.Http
{
    class Controller
    {
        private readonly string url;
        private System.Net.WebClient w_client;
        private System.Net.WebRequest request;
        private System.Net.HttpWebResponse response;

        /// <summary>
        /// Initializeer een nieuwe <see cref="Controller"/> klasse.
        /// </summary>
        /// <param name="_url"></param>
        public Controller(string _url)
        {
            url = _url;
        }

        /// <summary>
        /// Haalt klant ID op.
        /// </summary>
        /// <param name="client"></param>
        /// <returns>Client ID in JSON string.</returns>
        public string GetClientData(string client)
        {
            request = System.Net.WebRequest.Create(url + "bedrijf/" + client + "/id");
            using (System.Net.HttpWebResponse response = (System.Net.HttpWebResponse)request.GetResponse())
            {
                using (System.IO.Stream s = response.GetResponseStream())
                {
                    using (System.IO.StreamReader r = new System.IO.StreamReader(s))
                    {
                        return r.ReadToEnd();
                    }
                }
            }
        }

        /// <summary>
        /// Verstuur de foutmelding naar het ticketsysteem.
        /// </summary>
        /// <param name="error"></param>
        /// <returns></returns>
        public void Send(object error)
        {
            string data = Newtonsoft.Json.JsonConvert.SerializeObject(error);

            w_client = new System.Net.WebClient();
            w_client.Headers["Content-Type"] = "application/json";

            w_client.UploadData(url + "error/report", "POST", Encoding.Default.GetBytes(data));
        }
    }
}
