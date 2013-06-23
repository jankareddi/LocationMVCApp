using System.Web.Mvc;

namespace LocationMVCApp.Areas.Reports
{
    public class ReportsAreaRegistration : AreaRegistration
    {
        public override string AreaName
        {
            get
            {
                return "Reports";
            }
        }

        //"Reports/{controller}/{action}/{id}"
        public override void RegisterArea(AreaRegistrationContext context)
        {
            context.MapRoute(
                "Reports_default",
                "Reports",
                new { controller = "Home", action = "Index", id = UrlParameter.Optional }
            );

            context.MapRoute(
                "Reports_ID",
                "Reports/{reportID}",
                new { controller = "Home", action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}
