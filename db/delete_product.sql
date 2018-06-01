delete from houses
where id = $1;
select * from houses
order by id;
