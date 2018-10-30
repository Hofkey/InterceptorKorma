using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KormaErrorReporter
{
    public class Logger
    {
        private readonly Models.ErrorModel errorModel;
        private readonly Http.Controller sender;

        /// <summary>
        /// Logger initialisatie met app naam.
        /// </summary>
        /// <param name="client"></param>
        /// <param name="app"></param>
        /// <param name="time"></param>
        /// <param name="ex"></param>
        public Logger(int client, string app, DateTime time, Exception ex, string api)
        {
            errorModel = new Models.ErrorModel()
            {
                Client = client,
                App = app,
                Time = time,
                Ex = ex
            };

            sender = new Http.Controller(api);
        }

        /// <summary>
        /// [UNUSED]
        /// Logger initialisatie met app ID.
        /// Dit gaat later gebruikt worden als het ticketsysteem zo ver is.
        /// </summary>
        /// <param name="client"></param>
        /// <param name="app"></param>
        /// <param name="time"></param>
        /// <param name="ex"></param>
        public Logger(int client, int app, DateTime time, Exception ex, string api)
        {
            sender = new Http.Controller(api);
        }

        /// <summary>
        /// Verstuurd de foutmelding naar het ticketsysteem zodat het vermeld kan worden.
        /// Async omdat het ervoor zorgt dat het niet vast gaat lopen wanneer er meerdere errors ontstaan.
        /// </summary>
        public async Task LogError()
        {
            await sender.Send(errorModel);
        }
    }
}
