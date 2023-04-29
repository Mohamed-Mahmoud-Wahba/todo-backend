import { Arg, Int, Mutation, Query, Resolver, Subscription } from "type-graphql";
import { Task } from "../entities/Task";
@Resolver()
export class TaskResolver {
  @Query(() => String)
  hello(): string {
    return "Hello World!";
  }
  @Query(() => [Task])
  @Query(() => [Task])
  tasks(): Promise<Task[]> {
    return Task.find({});
  }
  @Query(() => Task, { nullable: true })
  task(
    @Arg("id", () => Int)
    id: number
  ): Promise<Task | undefined> {
    return Task.findOneBy({ id });
  }
  @Mutation(() => Task)
  createdTask(
    @Arg("title", () => String)
    title: string
  ): Promise<Task> {
    return Task.create({ title, isComplete: false }).save();
  }

  @Mutation(() => Boolean)
  deleteTask(
    @Arg("id", () => Int)
    id: number
  ): boolean {
    try {
      Task.delete({ id });
      return true;
    } catch {
      return false;
    }
  }
  @Mutation(() => Boolean, { nullable: true })
  updateTask(
    @Arg("id", () => Int)
    id: number,

    @Arg("isComplete", () => Boolean)
    isComplete: boolean,
    @Arg("title", () => String)
    title: string
  ): boolean | null {
    const task = Task.findOneBy({ id });
    if (!task) {
      return null;
    }

    try {
      Task.update({ id }, { isComplete, title });
      return true;
    } catch {
      return false;
    }
  }
}
