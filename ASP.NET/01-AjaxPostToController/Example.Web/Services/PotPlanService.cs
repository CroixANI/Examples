using System;

using Example.Common;

namespace Example.Web.Services
{
    public class PlotPlanService : IPlotPlanService
    {
        private readonly Random boolRandom = new Random();

        public bool CreateLink(LinkViewModel link)
        {
            return boolRandom.Next() % 2 == 0;
        }
    }
}