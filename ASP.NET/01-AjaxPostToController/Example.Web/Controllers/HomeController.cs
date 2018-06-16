using Microsoft.AspNetCore.Mvc;

using Example.Common;
using Example.Web.Services;

namespace Example.Web.Controllers
{
    public class HomeController : Controller
    {
        private readonly IPlotPlanService plotPlanService = new PlotPlanService();

        public IActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public IActionResult CreateLink(LinkViewModel linkViewModel)
        {
            var result = plotPlanService.CreateLink(linkViewModel);

            return Json(new { IsSuccess = result });
        }
    }
}
