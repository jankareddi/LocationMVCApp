using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using LocationMVCApp.Models;

namespace LocationMVCApp.Controllers
{
    public class ReportsDataController : ApiController
    {
        // GET api/reportsdata
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/reportsdata/5
        public ReportData Get(int id)
        {
            string reportContent = "This is a very <b>simple report</b>. The ID of this report is " + id;
            ReportData data = new ReportData() { Id = id.ToString(), Title = "Report " + id.ToString(), Xhtml = reportContent };
            return data;
        }

        // POST api/reportsdata
        public void Post([FromBody]string value)
        {
        }

        // PUT api/reportsdata/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/reportsdata/5
        public void Delete(int id)
        {
        }
    }
}
