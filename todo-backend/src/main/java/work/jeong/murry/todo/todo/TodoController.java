package work.jeong.murry.todo.todo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
public class TodoController {

  @Autowired
  protected TodoService todoService;

  @RequestMapping(value = "/api/todos", method = RequestMethod.GET)
  public List<Optional<Todo>> getTodos() {
    return todoService.getTodos();
  }

  @RequestMapping(value = "/api/todos", method = RequestMethod.POST)
  public boolean addTodo() {
    return todoService.addTodo("");
  }

}
