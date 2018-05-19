package work.jeong.murry.todo.index;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class IndexController {

  @GetMapping("/")
  public String getIndex(Model model) {
    model.addAttribute("name", "SpringBlog from Millky");
    return "hello";
  }

}
