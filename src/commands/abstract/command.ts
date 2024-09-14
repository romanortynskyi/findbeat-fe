abstract class Command<InputType, OutputType> {
  abstract execute(input: InputType): Promise<void> | void
  result: OutputType | undefined
}

export default Command
