{
    "require": "ts-node/register/files",
    "timeout": 20000
}pragma solidity 0.8.4;
import "hardhat/console.sol";

contract NoteContract {
    //owner address , the address will be assigned to the one who deployed the contract   
    address public owner;

    
    constructor() public {
        owner = msg.sender;
    }

    //Note structure for saving data
    struct Note {
        address acauntAddr;
        string name;
        string surname;
        uint256 age;
    }

    //We create a hash table (map) , the key will be the address, the value is our structure 
    mapping(address => Note) note;

    //Modifier to check that the function caller is an administrator . 
    modifier OnlyOwner() {
        require(msg.sender == owner, "You must be the owner of the contract!");
        _; 
    }


    /**
    * @dev newNote `function to create a new record, or re-record, if it was necessary to create multiple records, I would create a two-dimensional map`
    * @param _acauntAddr `stores the address that we will pass on `
    * @param _name `name`
    * @param _surname `surname`
    * @param _age `age`
     */
    function newNote(
        address _acauntAddr,
        string memory _name,
        string memory _surname,
        uint256 _age
    ) public {
        //check that the age cannot be greater than 256 and less than zero
        require(_age < 256 || _age > 0 , "age it's not real!");

        //create a Note object and write it as storage, it will be cheaper than calling the map every time
        Note storage newUsers = note[msg.sender];
        newUsers.acauntAddr = _acauntAddr;
        newUsers.name = _name;
        newUsers.surname = _surname;
        newUsers.age = _age;
    }
    

    /**
    * @dev updateNote   `the updateNote function is needed to update the record, this can only be done by the administrator `
    * @param _user `is the address of the user whose entry we want to change `
    * @param _acauntAddr `stores the address that we will pass on `
    * @param _name `name`
    * @param _surname `surname`
    * @param _age `age`
     */
    function updateNote(
        address _user,
        address _acauntAddr,
        string memory _name,
        string memory _surname,
        uint256 _age
    ) public  OnlyOwner() {
        require(_age < 256 || _age > 0 , "age it's not real!");
        Note storage _note = note[_user];
        _note.acauntAddr = _acauntAddr;
        _note.name = _name;
        _note.surname = _surname;
        _note.age = _age;

    }

    /**
    * @dev ownerShip `function to transfer the owner`
    * @param _newOwner `The address of the new owner`
     */
    function ownerShip(address _newOwner) external OnlyOwner() {
        owner = _newOwner;
    }

    /**
    * @dev getNote `getting a specific user's record `
    * @param _user `the address of the user whose record we want to get ` 
    */
    ///return Note structure
    function getNote(address _user)
        public
        view
        returns (Note memory _note)
    {
        _note = note[_user];
        //check that this even exists in the map 
        require(_note.age != 0 , "object does not exist"); 
        return (_note);
    }
}
