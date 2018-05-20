package work.jeong.murry.todo.todo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping({"/api/todos"})
public class TodoController {

  @Autowired
  protected TodoService todoService;

  @GetMapping(value = "")
  public List<Todo> getTodos() {
    return todoService.getTodos();
  }

  @GetMapping(value = "/{id}")
  public Optional<Todo> getTodo(@PathVariable("id") long id) {
    return todoService.getTodoById(id);
  }

  @PostMapping(value = "")
  public List<Todo> addTodo(@RequestBody String text) {
    return todoService.addTodo(text);
  }

}
