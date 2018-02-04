package controllers;

import play.api.mvc.Action;
import play.api.mvc.AnyContent;
import play.mvc.Controller;

import javax.inject.Inject;
import javax.inject.Singleton;

@Singleton
public class WebJarAssets extends Controller {

    private final org.webjars.play.WebJarAssets webJarAssets;

    @Inject
    public WebJarAssets(org.webjars.play.WebJarAssets webJarAssets) {
        this.webJarAssets = webJarAssets;
    }

    public Action<AnyContent> at(String file) {
        return webJarAssets.at(file);
    }
}

